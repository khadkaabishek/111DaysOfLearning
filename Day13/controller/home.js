const { getUser } = require("../service/auth");
const UserData = require("./../models/user");

async function handleHome(req, res) {
  if (!req.user) return res.redirect("login");
  console.log(req.user);

  const user = await UserData.findOne({ _id: req.user._id });
  console.log(user);

  return res.render("home", {
    userData: user,
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
async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;

  const user = getUser(userUid);

  req.user = user;
  next();
}

module.exports = { handleHome, forceAuthentication, checkAuth };
