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
const prompt = `
            Bạn là một giám khảo chấm thi IELTS chuyên nghiệp. 
            Học viên vừa trả lời câu hỏi sau đây: "${question}"
            
            Hãy nghe đoạn âm thanh được cung cấp và đánh giá câu trả lời của học viên dựa trên chính câu hỏi đó. 
            Nếu học viên trả lời lạc đề so với câu hỏi, hãy trừ điểm Task Response.
            Trả về kết quả dưới định dạng JSON với 2 trường: 
            - "score": (điểm số từ 0.0 đến 9.0)
            - "feedback": (đoạn text nhận xét chi tiết)
        `;
    
    // Khởi tạo Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // SỬA Ở ĐÂY: Đổi tên mô hình thành gemini-1.5-flash-latest để tránh lỗi 404
    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

    // Đóng gói âm thanh để gửi cho Gemini
    const audioPart = {
      inlineData: { data: audio, mimeType: mimeType }
    };

    const prompt = "Bạn là một chuyên gia giám khảo IELTS Speaking. Hãy nghe đoạn ghi âm sau của học viên. Đánh giá chi tiết về 4 yếu tố: Fluency and coherence(FC), Lexical resource(LR), Grammatical range and accuracy(GA) và Pronunciation(PR) . Sau đó đưa ra Band điểm dự kiến (0-9) và lời khuyên cải thiện chi tiết từng câu từ bằng tiếng Việt. Tiếp theo, đưa ra các cách nói giúp nâng band điểm speaking. Trình bày rõ ràng bằng các gạch đầu dòng.";

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
