const express = require("express");
const router = express();
const User = require("../models/user");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/coverImages");
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.User,
  });
});

router.post("/add-new", upload.single("coverImage"), (req, res) => {
  console.log(req.body);
  return res.redirect("/");
});

module.exports = router;
