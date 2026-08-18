const { GoogleGenerativeAI } = require("@google/generative-ai");

const config = {
  api: { bodyParser: { sizeLimit: '4mb' } },
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { audio, mimeType } = req.body;
    
    // Khởi tạo Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // SỬA Ở ĐÂY: Đổi tên mô hình thành gemini-1.5-flash-latest để tránh lỗi 404
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    // Đóng gói âm thanh để gửi cho Gemini
    const audioPart = {
      inlineData: { data: audio, mimeType: mimeType }
    };

    const prompt = "Bạn là một chuyên gia giám khảo IELTS Speaking. Hãy nghe đoạn ghi âm sau của học viên. Đánh giá chi tiết về: Phát âm (Pronunciation), Ngữ điệu (Fluency), Từ vựng (Lexical Resource) và Ngữ pháp (Grammar). Sau đó đưa ra Band điểm dự kiến (0-9) và lời khuyên cải thiện bằng tiếng Việt. Trình bày rõ ràng bằng các gạch đầu dòng.";

    // Gửi cho AI phân tích
    const result = await model.generateContent([prompt, audioPart]);
    const response = await result.response;
    const text = response.text();

    // Trả kết quả về cho màn hình web
    return res.status(200).json({ feedback: text });

  } catch (error) {
    console.error("Lỗi AI Backend:", error);
    return res.status(500).json({ error: "Lỗi trong quá trình chấm điểm: " + error.message });
  }
}

module.exports = handler;
module.exports.config = config;
