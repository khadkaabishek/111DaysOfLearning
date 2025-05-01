const mongoose = require("mongoose");
const fileData = new mongoose.Schema({
  filename: String,
  originalName: String,
  path: String,
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const Upload = mongoose.model("upload", fileData);

module.exports = Upload;
