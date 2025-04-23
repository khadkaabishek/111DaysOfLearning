const shortid = require("shortid");
const URL = require("./../models/url.js");
const mongoose = require("mongoose");
async function generateNewShortURL(req, res) {
  const body = req.body;
  // console.log(body);
  if (!body) return res.status(400).json({ err: "url is required" });
  const shortID = shortid();

  await URL.create({
    urlID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  // console.log(URL);
  return res.json({ id: shortID });
}
module.exports = { generateNewShortURL };
