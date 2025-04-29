const mongoose = require("mongoose");
async function handleMongoConnection(url) {
  return await mongoose.connect(url);
}

module.exports = { handleMongoConnection };
