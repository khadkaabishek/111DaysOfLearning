const express = require("express");
const mongoose = require("mongoose");
const URLRoute = require("./routes/url");
const bodyParser = require("body-parser");
const { handleConnectMongoDB } = require("./connection");
const app = express();
const PORT = 3000;
const path = require("path");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRoute");




app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

handleConnectMongoDB("mongodb://127.0.0.1:27017/urlShortner")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/url", URLRoute);
app.use("/", staticRoute);
// app.get("/", async (req, res) => {
//   const data = await URL.find({});
//   return res.render("home", {
//     htmlData: data,
//   });
// });

app.listen(PORT, () => {
  console.log(`Server Started at PORT :${PORT}`);
});
