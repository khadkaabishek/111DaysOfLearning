const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const { SecretKey } = require("./../Secret/Authorized");

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      userName: user.userName,
    },
    SecretKey()
  );
}

function getUser(token) {
  return jwt.verify(token, SecretKey());
}

module.exports = {
  setUser,
  getUser,
};
