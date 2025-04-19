const express = require("express");
const app = express();
const data = require("./MOCK_DATA.json");
const fs = require("fs");
const PORT = 3000;

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

//Middleware Plugin
app.use(express.urlencoded({ extended: false }));

app
  .route("/api/users")
  .get((req, res) => {
    return res.json(data);
  })
  .post((req, res) => {
    const body = req.body;
    data.push({ id: data.length + 1, ...body });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
      if (err) {
        return res.json({ status: "Failed", error: `${err}` });
      } else {
        return res.json({ status: "success", id: data.length });
      }
      //   console.log("done");
    });
  })
  .put((req, res) => {
    const body = req.body;

    const nID = Number(body.id); // Ensure it's a number

    const userIndex = data.findIndex((user) => user.id === nID);

    if (userIndex !== -1) {
      data[userIndex] = {
        ...data[userIndex], // existing data
        ...body, // overwrite fields with new data
        id: nID, // ensure `id` remains a number, not string
      };
    }
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
      if (err) {
        return res.json({ status: "Failed", error: `${err}` });
      } else {
        return res.json({ status: "success", id: nID });
      }
    });
  })
  .delete((req, res) => {
    return res.json({ status: "Pending" });
  });

app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
