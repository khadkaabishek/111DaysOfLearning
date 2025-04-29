const { getUser } = require("../service/auth");
const UserData = require("../models/user");

async function handleHome(req, res) {
  if (!req.user) return res.redirect("login");
  // console.log(req.user);

  const user = await UserData.findOne({ _id: req.user._id });
  // console.log(user);

  return res.render("home", {
    userData: user,
  });
}

module.exports = { handleHome };
