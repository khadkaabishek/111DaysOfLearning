const express = require("express");
const mongoose = require("mongoose");
const URLRoute = require("./routes/url");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/urlShortner")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/url", URLRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT :${PORT}`);
});
