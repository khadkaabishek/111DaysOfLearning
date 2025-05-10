const express = require("express");
const router = express();
const User = require("../models/user");
const multer = require("multer");
const Blog = require("./../models/blog");
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
    user: req.user,
  });
});
router.get("/our-blogs", async (req, res) => {
  const ourBlog = await Blog.find({});

  console.log(Blog.coverImageUrl);
  return res.render("ourBlog", {
    blogs: ourBlog,
  });
});



router.post("/add-new", upload.single("coverImage"), async (req, res) => {
  const body = req.body;
  console.log(body);
  const blog = await Blog.create({
    title: body.title,
    body: body.body,
    coverImageUrl: `/coverimages/${req.file.filename}`,
    createdBy: req.user._id,
  });
  return res.redirect("/");
});

module.exports = router;
