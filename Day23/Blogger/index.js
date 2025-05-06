const express = require("express");
const app = express();
const PORT = 4500;
const path = require("path");
const userRouter = require("./routes/user");
const { HandleMongoDB } = require("./connection");

HandleMongoDB("mongodb://127.0.0.1:27017/Blogger")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  return res.render("home");
});
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
