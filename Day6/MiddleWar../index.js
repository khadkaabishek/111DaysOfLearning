const express = require("express");
const app = express();
const data = require("../MOCK_DATA.json");
const fs = require("fs");
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

//custom Middlewares
app.use((req, res, next) => {
  console.log("Hello from middleware1");
  next(); // calls the next middleware or path
});
app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    `${Date.now()} : ${req.method} : ${req.ip} : ${req.path}\n`,
    () => {
      next();
    }
  );
});

app.route("/api/users").get((req, res) => {
  return res.json(data);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const Userdata = data.find((user) => user.id === id);
  res.json(Userdata);
});

app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
