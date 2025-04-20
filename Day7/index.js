const express = require("express");
const data = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();

app.get("/api/users/:id", (req, res) => {
  res.setHeader("X-myName", "Abishek Khadka"); //setting header ,  x for custom headers
  const id = Number(req.params.id);
  const Userdata = data.find((user) => user.id === id);
  res.status(200).json(Userdata);
});

app.route("/api/users").post((req, res) => {
  const body = req.body;
  data.push({ id: data.length + 1, ...body });
  console.log(body);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
    if (err) {
      return res.status(400).json({ status: "Failed", error: `${err}` });
    } else {
      return res.status(201).json({ status: "success", id: data.length });
    }
  });
});
app.listen(3000, () => {
  console.log("Server started");
});
