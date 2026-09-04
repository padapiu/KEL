const { GoogleGenerativeAI } = require("@google/generative-ai");

const config = {
  api: { bodyParser: { sizeLimit: '4mb' } },
};

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { taskType, prompt, essay } = req.body;
    
    const combinedPrompt = `
        Bạn là một chuyên gia giám khảo IELTS Writing.
        Học viên vừa hoàn thành bài viết IELTS ${taskType} với đề bài sau: "${prompt}"
        
        Bài làm của học viên:
        "${essay}"
        
        Nhiệm vụ của bạn:
        1. Đánh giá bài viết dựa trên 4 tiêu chí chuẩn IELTS: Task Achievement/Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.
        2. Đưa ra Overall Band Score dự kiến (0.0 - 9.0).
        3. Đọc kỹ từng câu trong bài làm, viết lại toàn bộ bài làm và sửa lỗi trực tiếp (ngữ pháp, từ vựng, diễn đạt). BẮT BUỘC dùng thẻ <del> để bọc những từ bị sai/bị xóa và thẻ <ins> để bọc những từ được thêm vào/sửa lại. 
        4. Đưa ra nhận xét chi tiết điểm mạnh, điểm yếu cho từng tiêu chí.
        
        YÊU CẦU ĐẦU RA (RẤT QUAN TRỌNG):
        - Chỉ trả về DUY NHẤT một chuỗi JSON hợp lệ. KHÔNG dùng thẻ markdown (\`\`\`json).
        - Cấu trúc JSON gồm 3 trường chính xác như sau:
        {
          "score": (nhập số điểm, ví dụ: 7.5),
          "corrected_text": "(Toàn bộ bài viết đã được sửa lỗi nội tuyến. Ví dụ: The <del>peoples</del><ins>people</ins> are... Dùng thẻ <br><br> để tách đoạn)",
          "feedback": "(Nhận xét chi tiết 4 tiêu chí. Dùng thẻ <h4>, <p>, <ul>, <li>, <b>, <i> để định dạng. KHÔNG dùng Markdown)"
        }
    `;
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash-lite" });

    const result = await model.generateContent([combinedPrompt]);
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
    console.error("Lỗi AI Backend Writing:", error);
    return res.status(500).json({ error: "Lỗi trong quá trình chấm điểm: " + error.message });
  }
}

module.exports = handler;
module.exports.config = config;
