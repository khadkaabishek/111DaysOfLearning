const express = require("express");
const URL = require("./../models/url");
const router = express.Router();



router.get("/", async (req, res) => {
  const data = await URL.find({});
  return res.render("home", {
    htmlData: data,
    
  });
});

module.exports = router;
