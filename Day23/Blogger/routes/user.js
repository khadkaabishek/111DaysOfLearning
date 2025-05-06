const express = require("express");
const User = require("../models/user");
const router = express();

router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/signout", (req, res) => {
  return res.render("signout");
});
router.post("/signup", async (req, res) => {
  const { full_name, email, password } = req.body;
  if (!full_name) return res.render("signout");
  await User.create({
    full_Name: full_name,
    email: email,
    password: password,
  });
  return res.redirect("/");
});

module.exports = router;
