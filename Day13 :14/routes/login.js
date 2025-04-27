const express = require("express");
const router = express.Router();
const { handleLogin } = require("./../controller/signup");

router.post("/", handleLogin);
router.get("/", (req, res) => {
  return res.render("login");
});
module.exports = router;
