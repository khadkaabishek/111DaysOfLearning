const { getUser } = require("../service/auth");

function checkForAuthorization(req, res, next) {
  const tokenCookie = req.cookies?.token;
  //   console.log(token);
  req.user = null;
  if (!tokenCookie) return next();
  const user = getUser(tokenCookie);
  req.user = user;
  //   console.log(user);
  next();
}
function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) {
      // console.log(req.user.role);
      return res.end("You are not Authorized to access this ");
    }
    return next();
  };
}

module.exports = { checkForAuthorization, restrictTo };
