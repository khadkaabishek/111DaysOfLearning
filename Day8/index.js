const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

//middleware
app.use(express.urlencoded({ extended: true }));

//MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/myTests")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

//Schema Design
const userSchema = new mongoose.Schema(
  {
    first_Name: {
      type: String,
      required: true,
    },
    last_Name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//Model Design
const Users = mongoose.model("user", userSchema);

//Insert Item
app.post("/api/users", async (req, res) => {
  const body = req.body;
  const result = await Users.create({
    first_Name: body.first_name,
    last_Name: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  console.log("Result: ", result);
  return res.status(201).json({ status: "success" });
});

//Get item from database
app.get("/users", async (req, res) => {
  const allDBUsers = await Users.find({});
  console.log(allDBUsers);
  const html = `<ul>
     ${allDBUsers
       .map(
         (user) =>
           ` Name :  <li> ${user.first_Name} - Email : ${user.email}</li>`
       )
       .join("")}
  </ul>
  `;
  res.send(html);
});

//Get User's Data in json format
app.get("/api/users", async (req, res) => {
  const allDBUsers = await Users.find({});
  res.json(allDBUsers);
});

//Get Users data by their id
app.get("/api/users/:id", async (req, res) => {
  const User = await Users.findById(req.params.id);
  if (!User) {
    res.status(404).json({ msg: "No users with matching id" });
  }
  return res.json(User);
});

//Update by id
app.put("/api/users/:id", async (req, res) => {
  const body = req.body;
  console.log(body);
  const User = await Users.findByIdAndUpdate(req.params.id, {
    first_Name: body.first_name,
    email: body.email,
  });
  return res.json({ msg: " success" });
});

//Delete by ID
app.delete("/api/users/:id", async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  return res.json({ msg: "success" });
});
app.listen(PORT, () => {
  console.log(`Server started at Port :${PORT}`);
});
