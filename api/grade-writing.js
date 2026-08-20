import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    // Chỉ cho phép nhận dữ liệu gửi lên qua phương thức POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Chỉ chấp nhận phương thức POST" });
    }

    try {
        // Lấy các thông số được gửi từ giao diện web
        const { taskType, prompt, essay } = req.body;

        // Báo lỗi nếu không có bài làm
        if (!essay) {
            return res.status(400).json({ message: "Không tìm thấy nội dung bài viết." });
        }

        // Khởi tạo bộ máy Gemini AI bằng API Key bí mật
        // Tham số process.env.GEMINI_API_KEY sẽ được lấy từ cài đặt của Vercel
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
        Bạn BẮT BUỘC PHẢI trả về kết quả DƯỚI DẠNG JSON với cấu trúc chính xác như sau (không in thêm bất kỳ văn bản nào khác, không dùng dấu markdown \`\`\`json):
        {
            "score": 6.5,
            "feedback": "Nhận xét chi tiết bằng tiếng Việt ở đây. Trình bày rõ điểm mạnh, điểm yếu và cách khắc phục."
        }
        `;

        // Ra lệnh cho AI xử lý và chờ kết quả
        const result = await model.generateContent(systemPrompt);
        const responseText = result.response.text();
        
        // Trích xuất và định dạng lại kết quả AI trả về thành dữ liệu chuẩn
        let aiData;
        try {
            // Cắt bỏ các ký tự thừa do AI đôi khi tự động thêm vào
            const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
            aiData = JSON.parse(cleanJson);
        } catch (parseError) {
            // Nếu AI không trả về đúng chuẩn JSON, lưu tạm kết quả ở dạng văn bản thô
            aiData = {
                score: 0.0,
                feedback: responseText
            };
        }

        // Trả kết quả thành công về cho trang web
        res.status(200).json(aiData);

    } catch (error) {
        console.error("Lỗi hệ thống API Writing:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi chấm bài", error: error.message });
    }
}
