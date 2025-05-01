const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const { handleMongoDBConnection } = require("./connection");
const multer = require("multer");
const Upload = require("./models/file");

// DB connection
handleMongoDBConnection("mongodb://127.0.0.1:27017/ImagesAndFilesUploader")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(`Error caught: ${err}`));

// Middleware for form data
app.use(express.urlencoded({ extended: false }));

// Views setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Serve static files
app.use("/uploads", express.static("uploads")); // first uploads is url like,  and another is actual location of file  like folder here

// Multer config with validation
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .png, and .pdf files are allowed."));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter,
});

// Routes
app.post("/uploads", (req, res) => {
  upload.single("uploadFile")(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // File too large
      return res.status(400).send("File too large. Max size is 5MB.");
    } else if (err) {
      // Invalid file type or other error
      return res.status(400).send(err.message);
    }

    try {
      await Upload.create({
        filename: req.file.filename,
        originalName: req.file.originalname,
        path: req.file.path,
        mimetype: req.file.mimetype,
        size: req.file.size,
      });
      res.redirect("/");
    } catch (dbErr) {
      console.error("DB error during file upload", dbErr);
      res.status(500).send("Failed to upload file to database.");
    }
  });
});

app.get("/", async (req, res) => {
  const files = await Upload.find();
  res.render("index", { files });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
