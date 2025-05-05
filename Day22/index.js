const express = require("express");
const app = express();
const PORT = 3000;
const { HandleMongoDB_Connection } = require("./connection");
const User = require("./models/user");

HandleMongoDB_Connection("mongodb://127.0.0.1:27017/Search_Api")
  .then(() => {
    console.log(`MongoDB connected successful`);
  })
  .catch((err) => {
    console.log(`Error Connecting :${err}`);
  });

app.use(express.urlencoded({ extended: false }));
app.get("/users", async (req, res) => {
  const All_Users = await User.find({});
  console.log(All_Users);
  return res.json({ msg: "get response successful", users: All_Users });
});

app.get("users/:user_name", async (req, res) => {
  const matching_User = await User.find({});
});

app.get("/users/search", async (req, res) => {
  const { query } = req.query; 
  // console.log(query);
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }
  try {
    const results = await User.find({
      user_name: { $regex: `^${query}`, $options: "i" }, // starts with , case-insensitive opt i 
    });
    // console.log(results);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while searching" });
  }
});

app.post("/users", async (req, res) => {
  const { user_name, age, profession, salary } = req.body;

  try {
    const newUser = new User({ user_name, age, profession, salary });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started at Port :${PORT}`);
});
