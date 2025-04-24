const shortid = require("shortid");
const URL = require("../models/url");

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortID = shortid();

  try {
    const newEntry = await URL.create({
      urlID: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({
      id: shortID,
      shortURL: `http://localhost:3000/${shortID}`,
    });
  } catch (err) {
    console.error("Error creating short URL:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { generateNewShortURL };
