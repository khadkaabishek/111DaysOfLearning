const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
PORT = 3000;

const { handleConnectMongoDB } = require("./connection");

handleConnectMongoDB("mongodb://127.0.0.1:27017/urlShortner")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT :${PORT}`);
});
