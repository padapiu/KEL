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
    
    // Gộp prompt để tránh lỗi khai báo trùng và thiết lập luật nghiêm ngặt cho AI
    const combinedPrompt = `
        Bạn là một chuyên gia giám khảo IELTS Speaking. Hãy nghe đoạn ghi âm sau của học viên.
        Học viên vừa trả lời câu hỏi: "${question}"
        
        Nhiệm vụ của bạn:
        1. Đánh giá chi tiết 4 tiêu chí: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation.
        2. Đưa ra Band điểm dự kiến (0.0 - 9.0).
        3. Phân tích điểm mạnh và điểm yếu. Trích dẫn lại câu nói bị lỗi của học viên và sửa lại cho đúng.
        4. Đưa ra các từ vựng/cấu trúc thay thế ăn điểm hơn.
        5. NẾU HỌC VIÊN TRẢ LỜI LẠC ĐỀ HOẶC NÓI CHUYỆN BÊN LỀ (như "đang test mic", "nhờ giám khảo nhận xét"), phải trừ điểm nặng và nhắc nhở.
        
        YÊU CẦU ĐẦU RA (RẤT QUAN TRỌNG):
        - Chỉ trả về DUY NHẤT một chuỗi JSON hợp lệ. KHÔNG dùng thẻ markdown (\`\`\`json).
        - Cấu trúc JSON gồm 2 trường chính xác như sau:
        {
          "score": (nhập số điểm, ví dụ: 5.5),
          "feedback": "(Nhập toàn bộ nội dung nhận xét vào đây. Bắt buộc dùng thẻ HTML cơ bản như <b>, <br>, <ul>, <li>, <p> để định dạng cho đẹp. Tuyệt đối KHÔNG dùng Markdown như ** hay #)"
        }
    `;
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash-lite" });

    const audioPart = {
      inlineData: { data: audio, mimeType: mimeType }
    };

    const result = await model.generateContent([combinedPrompt, audioPart]);
    const response = await result.response;
    let text = response.text();

    // Dọn dẹp chuỗi JSON đề phòng AI vẫn trả về thẻ markdown
    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    const parsedData = JSON.parse(text);

    return res.status(200).json({ 
        score: parsedData.score, 
        feedback: parsedData.feedback 
    });

  } catch (error) {
    console.error("Lỗi AI Backend:", error);
    return res.status(500).json({ error: "Lỗi trong quá trình chấm điểm: " + error.message });
  }
}

module.exports = handler;
module.exports.config = config;
