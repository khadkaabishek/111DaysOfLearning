const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

app.use(express.urlencoded({ extended: false }));
const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("homepage");
});

app.post(
  "/getFile",
  upload.fields([
    { name: "UploadFile", maxCount: 1 },
    { name: "secondFile", maxCount: 1 },
  ]),
  (req, res) => {
    console.log("Body:", req.body);
    console.log("Files:", req.files);
    res.redirect("/");
  }
);

app.listen(PORT, () => {
  console.log(`Server started at Port : ${PORT}`);
});
