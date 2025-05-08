const express = require("express");
const app = express();
const PORT = 4500;
const path = require("path");
const userRouter = require("./routes/user");
const { HandleMongoDB } = require("./connection");
const cookieParser = require("cookie-parser");
const { checkForAuthentication } = require("./middleware/auth");

HandleMongoDB("mongodb://127.0.0.1:27017/Blogger")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication("token"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  return res.render("home", {
    user: req.user,
  });
});
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
