const express = require("express");
const router = express.Router();
const { handleSignup } = require("../controller/signup");

router.post("/", handleSignup);
router.get("/", (req, res) => {
  return res.render("signup", {});
});

module.exports = router;
