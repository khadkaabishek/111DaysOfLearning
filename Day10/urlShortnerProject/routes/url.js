const express = require("express");
const { generateNewShortURL } = require("./../controllers/url");
const router = express.Router();
const URL = require("./../models/url");

router.post("/", generateNewShortURL);
router.get("/:shorted", async (req, res) => {
  const shorted = req.params.shorted;
  const entry = await URL.findOneAndUpdate(
    {
      urlID: shorted,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  res.redirect(entry.redirectURL);
});
module.exports = router;
