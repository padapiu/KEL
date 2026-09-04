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
    
    // Gộp prompt để tránh lỗi khai báo trùng và thiết lập luật nghiêm ngặt cho AI
    const combinedPrompt = `
        Bạn là một chuyên gia giám khảo IELTS Writing.
        Học viên vừa hoàn thành bài viết IELTS ${taskType} với đề bài sau: "${prompt}"
        
        Bài làm của học viên:
        "${essay}"
        
        Nhiệm vụ của bạn:
        1. Đánh giá bài viết dựa trên 4 tiêu chí chuẩn IELTS: Task Achievement/Response (TA/TR), Coherence and Cohesion (CC), Lexical Resource (LR), Grammatical Range and Accuracy (GRA).
        2. Đưa ra Overall Band Score dự kiến (0.0 - 9.0).
        3. Phân tích điểm mạnh và điểm yếu cho TỪNG TIÊU CHÍ. Nêu rõ lỗi cụ thể (trích dẫn lỗi từ bài viết của học viên) và cách sửa lại cho đúng/hay hơn.
        
        YÊU CẦU ĐẦU RA (RẤT QUAN TRỌNG):
        - Chỉ trả về DUY NHẤT một chuỗi JSON hợp lệ. KHÔNG dùng thẻ markdown (\`\`\`json).
        - Cấu trúc JSON gồm 2 trường chính xác như sau:
        {
          "score": (nhập số điểm, ví dụ: 7.5),
          "feedback": "(Nhập toàn bộ nội dung nhận xét vào đây. Bắt buộc dùng các thẻ HTML như sau để định dạng: 
          Sử dụng <h4> để làm tiêu đề cho 4 tiêu chí. 
          Sử dụng <p> để viết đoạn văn. 
          Sử dụng <ul> và <li> để liệt kê điểm mạnh, điểm yếu. 
          Sử dụng <b> cho các từ khoá quan trọng. 
          Sử dụng <i> cho các từ/câu được trích dẫn từ bài làm.
          Tuyệt đối KHÔNG dùng Markdown như ** hay ### trong trường này)"
        }
    `;
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash-lite" });

    const result = await model.generateContent([combinedPrompt]);
    const response = await result.response;
    let text = response.text();

    // Dọn dẹp chuỗi JSON đề phòng AI vẫn trả về thẻ markdown
    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    const parsedData = JSON.parse(text);

    return res.status(200).json({ 
        score: parseFloat(parsedData.score), 
        feedback: parsedData.feedback 
    });

  } catch (error) {
    console.error("Lỗi AI Backend Writing:", error);
    return res.status(500).json({ error: "Lỗi trong quá trình chấm điểm: " + error.message });
  }
}

module.exports = handler;
module.exports.config = config;
