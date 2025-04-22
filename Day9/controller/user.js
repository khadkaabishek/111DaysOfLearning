const Users = require("./../models/user");

async function handleAllUsers(req, res) {
  const allDBUsers = await Users.find({});
  res.json(allDBUsers);
}

async function handleGetUserByID(req, res) {
  const User = await Users.findById(req.params.id);
  if (!User) {
    res.status(404).json({ msg: "No users with matching id" });
  }
  return res.json(User);
}

async function handleUpdateUserById(req, res) {
  const body = req.body;
  // console.log(body);
  const User = await Users.findByIdAndUpdate(req.params.id, {
    first_Name: body.first_name,
    email: body.email,
  });
  return res.json({ msg: " success" });
}

async function handleDeleteUserById(req, res) {
  await Users.findByIdAndDelete(req.params.id);
  return res.json({ msg: "success" });
}

async function handleCreateUser(req, res) {
  const body = req.body;
  const result = await Users.create({
    first_Name: body.first_name,
    last_Name: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  console.log("Result: ", result);
  return res.status(201).json({ status: "success" });
}

module.exports = {
  handleAllUsers,
  handleGetUserByID,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
