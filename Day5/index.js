const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const PORT = 3000;

//renderring all user data in json format
app.get("/api/users", (req, res) => {
  res.json(data);
});

// renderring all user's first name in html format
app.get("/users", (req, res) => {
  const html = `<ul>
     ${data.map((user) => ` <li> ${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

//renderring specific  user data in json format  // uses : to indicate dynamism
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const Userdata = data.find((user) => user.id === id);
  res.json(Userdata);
});

// routing multiple methods in single path with short line of code

app
  .route("/api/users")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});



app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
