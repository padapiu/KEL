// api/grade-speaking.js
// Mục đích: Xử lý file âm thanh gửi lên từ giao diện và gọi Google Gemini AI để chấm điểm.

import { GoogleGenerativeAI } from "@google/generative-ai";

// Vercel Serverless Function yêu cầu export một hàm mặc định
export default async function handler(req, res) {
  // 1. Chỉ chấp nhận phương thức POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    // 2. Khởi tạo Gemini AI bằng khóa API (sẽ được cài đặt trong Vercel Environment Variables)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // HƯỚNG DẪN: Phần này sẽ cần cấu hình thêm thư viện đọc form-data (như 'multer' hoặc 'formidable') 
    // trên Vercel để đọc được file ghi âm.
    // Tạm thời, đây là khung cấu trúc chuẩn của Vercel để bạn hình dung.
    
    // Giả lập AI trả về kết quả thành công để đảm bảo luồng API hoạt động
    const mockFeedback = "AI đã nhận được bài nói của bạn (Đã chạy qua Vercel API thành công!). Ngữ điệu tốt, cần chú ý phát âm âm cuối (ending sounds).";

    // 3. Trả kết quả về cho giao diện (Frontend)
    return res.status(200).json({ feedback: mockFeedback });
    
  } catch (error) {
    console.error("Lỗi API:", error);
    return res.status(500).json({ error: "Lỗi trong quá trình chấm điểm." });
  }
}
