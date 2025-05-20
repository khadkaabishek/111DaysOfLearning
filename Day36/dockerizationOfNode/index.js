const express = require("express");
const Port = process.env.Port || 8000;
const app = express();

app.get("/", (req, res) => {
  return res.json({ msg: "Hey this is me get req on / " });
});
app.listen(Port, () => {
  console.log(`Server started at port : ${Port}`);
});
