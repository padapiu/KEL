const { GoogleGenerativeAI } = require("@google/generative-ai");

const config = {
  api: { bodyParser: { sizeLimit: '4mb' } },
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { audio, mimeType, question } = req.body;
    
    // Gộp tất cả các yêu cầu vào một biến duy nhất để không bị trùng lặp tên biến
    const combinedPrompt = `
        Bạn là một chuyên gia giám khảo IELTS Speaking. Hãy nghe đoạn ghi âm sau của học viên.
        Học viên vừa trả lời câu hỏi sau đây: "${question}"
        
        Nhiệm vụ của bạn:
        1. Đánh giá chi tiết về 4 yếu tố: Fluency and coherence (FC), Lexical resource (LR), Grammatical range and accuracy (GA) và Pronunciation (PR).
        2. Đưa ra Band điểm dự kiến (0-9) và lời khuyên cải thiện chi tiết từng câu từ bằng tiếng Việt.
        3. Đưa ra các cách nói giúp nâng band điểm speaking. Trình bày rõ ràng bằng các gạch đầu dòng.
        4. Nếu học viên trả lời lạc đề so với câu hỏi, hãy trừ điểm Task Response.
        
        Trả về kết quả dưới định dạng JSON với 2 trường: 
        - "score": (điểm số từ 0.0 đến 9.0)
        - "feedback": (đoạn text nhận xét chi tiết)
    `;
    
    // Khởi tạo Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Sử dụng mô hình hợp lệ
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    // Đóng gói âm thanh để gửi cho Gemini
    const audioPart = {
      inlineData: { data: audio, mimeType: mimeType }
    };

    // Gửi cho AI phân tích
    const result = await model.generateContent([combinedPrompt, audioPart]);
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
