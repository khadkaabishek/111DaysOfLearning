const { getUser } = require("../service/auth");
const UserData = require("./../models/user");

async function handleHome(req, res) {
  const email = await UserData.find({ email: req.user._id });
  return res.render("home", {
    userData: {
      name: UserData.userName,
      email: email,
    },
  });
}
async function forceAuthentication(req, res, next) {
  const userID = req.cookies?.uid;
  if (!userID) {
    // console.log(req.cookies?.uid);
    // console.log(getUser(req.cookies?.uid));
    return res.redirect("/login");
  }
  const user = getUser(userID);
  if (!user) return res.redirect("login");
  req.user = user;
  next();
}

module.exports = { handleHome, forceAuthentication };
