const { GoogleGenerativeAI } = require("@google/generative-ai");

// Hàm tạo độ trễ (delay) bằng Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Chỉ chấp nhận phương thức POST" });
    }

    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Lỗi máy chủ: Chưa cấu hình GEMINI_API_KEY trong Vercel.");
        }

        const { taskType, prompt, essay } = req.body;

        if (!essay) {
            return res.status(400).json({ message: "Không tìm thấy nội dung bài viết." });
        }

        // Khởi tạo bộ máy Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        // MẸO: Bạn nên dùng mô hình ổn định như gemini-1.5-flash-latest để hạn chế lỗi 503
        const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

        // Xây dựng câu lệnh Prompt cho AI
        const systemPrompt = `
        Bạn là một giám khảo chấm thi IELTS chuyên nghiệp. Hãy chấm bài viết sau đây một cách khách quan và chính xác.
        - Loại bài thi: ${taskType || "Writing Task 1"}
        - Đề bài: ${prompt || "Không có đề bài cụ thể"}
        - Bài làm của học sinh:
        """
        ${essay}
        """
        
        Hãy đánh giá chi tiết dựa trên 4 tiêu chí: Task Achievement (hoặc Task Response), Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.
        Bạn BẮT BUỘC PHẢI trả về kết quả DƯỚI DẠNG JSON với cấu trúc chính xác như sau (không in thêm văn bản nào khác):
        {
            "score": 6.5,
            "feedback": "Nhận xét chi tiết bằng tiếng Việt ở đây. Trình bày rõ điểm mạnh, điểm yếu và cách khắc phục."
        }
        `;

        // ---------------------------------------------------------
        // CƠ CHẾ TỰ ĐỘNG THỬ LẠI (RETRY LOGIC) KHI MÁY CHỦ BẬN
        // ---------------------------------------------------------
        let result;
        let retries = 3; // Số lần thử tối đa
        
        for (let i = 0; i < retries; i++) {
            try {
                // Thử gọi AI
                result = await model.generateContent(systemPrompt);
                break; // Nếu thành công, thoát ngay khỏi vòng lặp
            } catch (err) {
                // Nếu lỗi 503 (Quá tải) và vẫn còn lượt thử
                if (err.status === 503 && i < retries - 1) {
                    console.warn(`Máy chủ bận, đang thử lại lần ${i + 1}...`);
                    await delay(2000); // Dừng 2 giây trước khi gọi lại
                } else {
                    // Nếu lỗi khác hoặc đã hết lượt thử, ném lỗi ra ngoài để xử lý
                    throw err; 
                }
            }
        }
        // ---------------------------------------------------------

        const responseText = result.response.text();
        
        // Xử lý chuỗi JSON
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

        // Trả kết quả thành công
        res.status(200).json(aiData);

    } catch (error) {
        console.error("Lỗi API Writing:", error);
        
        // Phản hồi lỗi thân thiện nếu Google vẫn quá tải sau 3 lần thử
        if (error.status === 503) {
            return res.status(503).json({ 
                message: "Máy chủ AI của Google hiện đang quá tải. Bạn vui lòng đợi 1-2 phút rồi bấm chấm lại nhé!" 
            });
        }

        // Trả về lỗi hệ thống chung
        res.status(500).json({ message: "Lỗi máy chủ", error: error.message });
    }
}
