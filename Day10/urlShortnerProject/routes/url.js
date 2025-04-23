const express = require("express");
const { generateNewShortURL } = require("../controllers/url");
const router = express.Router();
const URL = require("../models/url");

router.post("/", generateNewShortURL);

router.get("/:shorted", async (req, res) => {
  const shorted = req.params.shorted;

  try {
    const entry = await URL.findOneAndUpdate(
      { urlID: shorted },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    ).exec();

    if (!entry) {
      return res.status(404).send("Short URL not found.");
    }

    const finalRedirect = entry.redirectURL.startsWith("http")
      ? entry.redirectURL
      : `https://${entry.redirectURL}`;

    res.redirect(finalRedirect);
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
