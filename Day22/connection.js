const { default: mongoose } = require("mongoose");

async function HandleMongoDB_Connection(url) {
  return await mongoose.connect(url);
}

module.exports = { HandleMongoDB_Connection };
