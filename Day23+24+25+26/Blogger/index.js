const express = require("express");
const app = express();
const PORT = 4500;
const path = require("path");
const userRouter = require("./routes/user");
const { HandleMongoDB } = require("./connection");
const cookieParser = require("cookie-parser");
const { checkForAuthentication } = require("./middleware/auth");
const blogRoute = require("./routes/blog");
const profileRoute = require("./routes/yourProfile");
const Blog = require("./models/blog");
HandleMongoDB("mongodb://127.0.0.1:27017/Blogger")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthentication("token"));
app.use("/blog", blogRoute);
app.use("/profile", profileRoute);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
  const blog = await Blog.find({});
  return res.render("ourBlog", {
    user: req.user,
    blogs: blog,
  });
});

app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
