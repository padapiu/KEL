const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async function handler(req, res) {
    // Chỉ cho phép nhận dữ liệu gửi lên qua phương thức POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Chỉ chấp nhận phương thức POST" });
    }

    try {
        // Kiểm tra xem API Key đã có trong Vercel chưa
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Lỗi máy chủ: Chưa cấu hình GEMINI_API_KEY trong Vercel.");
        }

        // Lấy các thông số được gửi từ giao diện web
        const { taskType, prompt, essay } = req.body;

        if (!essay) {
            return res.status(400).json({ message: "Không tìm thấy nội dung bài viết." });
        }

        // Khởi tạo bộ máy Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
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
        Bạn BẮT BUỘC PHẢI trả về kết quả DƯỚI DẠNG JSON với cấu trúc chính xác như sau (không in thêm bất kỳ văn bản nào khác, không dùng dấu markdown):
        {
            "score": 6.5,
            "feedback": "Nhận xét chi tiết bằng tiếng Việt ở đây. Trình bày rõ điểm mạnh, điểm yếu và cách khắc phục."
        }
        `;

        // Ra lệnh cho AI xử lý
        const result = await model.generateContent(systemPrompt);
        const responseText = result.response.text();
        
        // Xử lý chuỗi JSON
        let aiData;
        try {
            const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
            aiData = JSON.parse(cleanJson);
        } catch (parseError) {
            aiData = {
                score: 0.0,
                feedback: "AI không trả về đúng định dạng. Dưới đây là nhận xét thô:\n\n" + responseText
            };
        }

        // Trả kết quả thành công
        res.status(200).json(aiData);

    } catch (error) {
        console.error("Lỗi API Writing:", error);
        // Trả về lỗi 500 kèm thông báo chi tiết để hiển thị lên trình duyệt
        res.status(500).json({ message: "Lỗi máy chủ", error: error.message });
    }
}
