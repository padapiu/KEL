const { GoogleGenerativeAI } = require("@google/generative-ai");

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Chỉ chấp nhận phương thức POST" });
    }

    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Lỗi máy chủ: Chưa cấu hình GEMINI_API_KEY trong Vercel.");
        }

        // Nhận thêm imageUrl từ request body
        const { taskType, prompt, essay, imageUrl } = req.body;

        if (!essay) {
            return res.status(400).json({ message: "Không tìm thấy nội dung bài viết." });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Chuyển sang gemini-1.5-flash để hỗ trợ đọc hình ảnh đa phương thức
        const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

        // Khởi tạo mảng chứa câu lệnh (Prompt Parts)
        let promptParts = [
            `Bạn là một giám khảo chấm thi IELTS chuyên nghiệp. Hãy chấm bài viết sau đây một cách khách quan dựa trên Đề bài và Hình ảnh/Biểu đồ gốc được cung cấp.
            - Loại bài thi: ${taskType || "Writing Task 1"}
            - Đề bài: ${prompt || "Không có đề bài cụ thể"}
            - Bài làm của học sinh:
            """
            ${essay}
            """
            
            Hãy đánh giá chi tiết dựa trên 4 tiêu chí: Task Achievement (đối chiếu chặt chẽ bài viết với số liệu trên hình ảnh gốc), Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.
            Bạn BẮT BUỘC PHẢI trả về kết quả DƯỚI DẠNG JSON với cấu trúc chính xác như sau (không in thêm văn bản nào khác):
            {
                "score": 6.5,
                "feedback": "Nhận xét chi tiết bằng tiếng Việt ở đây. Trình bày rõ điểm mạnh, điểm yếu và cách khắc phục."
            }`
        ];

        // Nếu client có gửi hình ảnh bài gốc, tải nó về và chuyển sang Base64
        if (imageUrl) {
            try {
                // Vercel (Node 18+) hỗ trợ hàm fetch mặc định
                const imageResp = await fetch(imageUrl);
                const arrayBuffer = await imageResp.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const mimeType = imageResp.headers.get('content-type') || 'image/png';
                
                // Đẩy dữ liệu ảnh vào mảng Prompt để Gemini đọc
                promptParts.push({
                    inlineData: {
                        data: buffer.toString("base64"),
                        mimeType: mimeType
                    }
                });
            } catch (imgErr) {
                console.error("Lỗi khi tải ảnh bài gốc:", imgErr);
            }
        }

        let result;
        let retries = 3; 
        
        for (let i = 0; i < retries; i++) {
            try {
                // Truyền toàn bộ mảng (Text + Image) vào Gemini
                result = await model.generateContent(promptParts);
                break; 
            } catch (err) {
                if (err.status === 503 && i < retries - 1) {
                    console.warn(`Máy chủ bận, đang thử lại lần ${i + 1}...`);
                    await delay(2000); 
                } else {
                    throw err; 
                }
            }
        }

        const responseText = result.response.text();
        
        let aiData;
        try {
            const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
            aiData = JSON.parse(cleanJson);
        } catch (parseError) {
            aiData = {
                score: 0.0,
                feedback: "AI không trả về đúng định dạng JSON. Nhận xét thô:\n\n" + responseText
            };
        }

        res.status(200).json(aiData);

    } catch (error) {
        console.error("Lỗi API Writing:", error);
        
        if (error.status === 503) {
            return res.status(503).json({ 
                message: "Máy chủ AI của Google hiện đang quá tải. Bạn vui lòng đợi 1-2 phút rồi bấm chấm lại nhé!" 
            });
        }

        res.status(500).json({ message: "Lỗi máy chủ", error: error.message });
    }
}
