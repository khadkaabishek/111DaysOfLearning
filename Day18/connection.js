const mongoose = require("mongoose");
async function handleMongoDBConnection(url) {
  return await mongoose.connect(url);
}
module.exports = { handleMongoDBConnection };
