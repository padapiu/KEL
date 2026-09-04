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
    
    const combinedPrompt = `
        Bạn là một chuyên gia giám khảo IELTS Speaking. Hãy nghe đoạn ghi âm sau của học viên.
        Học viên vừa trả lời câu hỏi: "${question}"
        
        Nhiệm vụ của bạn:
        1. Đánh giá chi tiết 4 tiêu chí: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation.
        2. Đưa ra Band điểm dự kiến (0.0 - 9.0).
        3. Nghe và ghi lại nguyên văn (transcript) những gì học viên nói. Sau đó, sửa lỗi trực tiếp trên bản transcript này (ngữ pháp, từ vựng, phát âm sai). BẮT BUỘC dùng thẻ <del> để bọc những từ học viên nói sai và thẻ <ins> để bọc những từ được sửa lại hoặc gợi ý thêm vào.
        4. Trừ điểm nặng nếu học viên trả lời lạc đề hoặc nói chuyện bên lề.
        
        YÊU CẦU ĐẦU RA (RẤT QUAN TRỌNG):
        - Chỉ trả về DUY NHẤT một chuỗi JSON hợp lệ. KHÔNG dùng thẻ markdown (\`\`\`json).
        - Cấu trúc JSON gồm 3 trường chính xác như sau:
        {
          "score": (nhập số điểm, ví dụ: 6.5),
          "corrected_text": "(Bản transcript đã được sửa lỗi nội tuyến bằng <del> và <ins>. Dùng <br><br> để tách đoạn)",
          "feedback": "(Nhập nhận xét chi tiết 4 tiêu chí. Dùng thẻ <h4>, <p>, <ul>, <li>, <b>, <i> để định dạng. KHÔNG dùng Markdown)"
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

    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const parsedData = JSON.parse(text);

    return res.status(200).json({ 
        score: parseFloat(parsedData.score),
        corrected_text: parsedData.corrected_text,
        feedback: parsedData.feedback 
    });

  } catch (error) {
    console.error("Lỗi AI Backend Speaking:", error);
    return res.status(500).json({ error: "Lỗi trong quá trình chấm điểm: " + error.message });
  }
}

module.exports = handler;
module.exports.config = config;
