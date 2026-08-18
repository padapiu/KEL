import { GoogleGenerativeAI } from "@google/generative-ai";

// Nâng hạn mức dữ liệu gửi lên cho file ghi âm (tối đa 4MB)
export const config = {
  api: { bodyParser: { sizeLimit: '4mb' } },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { audio, mimeType } = req.body;
    
    // Gọi AI bằng khóa API (sẽ cài đặt ở Bước 4)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Đóng gói âm thanh để gửi cho Gemini
    const audioPart = {
      inlineData: { data: audio, mimeType: mimeType }
    };

    // Đưa ra câu lệnh (Prompt) yêu cầu AI làm giám khảo
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
