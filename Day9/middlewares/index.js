const fs = require("fs");
function logreqres(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `${Date.now()} : ${req.method} : ${req.ip} : ${req.path}\n`,
      () => {
        next();
      }
    );
  };
}

module.exports = { logreqres };
