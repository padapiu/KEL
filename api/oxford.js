// api/oxford.js
export default async function handler(req, res) {
    const { word } = req.query;

    if (!word) {
        return res.status(400).json({ error: "Vui lòng cung cấp từ vựng cần tra." });
    }

    const appId = process.env.OXFORD_APP_ID;
    const appKey = process.env.OXFORD_APP_KEY;
    const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-gb/${encodeURIComponent(word)}?strictMatch=false`;

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
                "app_id": appId,
                "app_key": appKey
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Không tìm thấy từ vựng." });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Lỗi kết nối máy chủ." });
    }
}
