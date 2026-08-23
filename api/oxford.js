// api/oxford.js
module.exports = async function handler(req, res) {
    const { word } = req.query;

    if (!word) {
        return res.status(400).json({ error: "Vui lòng cung cấp từ vựng cần tra." });
    }

    const appId = process.env.OXFORD_APP_ID;
    const appKey = process.env.OXFORD_APP_KEY;
    
    // Đảm bảo từ vựng được làm sạch khoảng trắng và viết thường
    const cleanWord = word.toLowerCase().trim();
    
    const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-gb/${encodeURIComponent(cleanWord)}?strictMatch=false`;

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
                "app_id": appId,
                "app_key": appKey
            }
        });

        // Nếu Oxford không tìm thấy từ (VD: do từ số nhiều), nó sẽ trả về 404 ở đây
        if (!response.ok) {
            return res.status(response.status).json({ error: "Không tìm thấy từ vựng trên Oxford." });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Lỗi kết nối máy chủ." });
    }
};
