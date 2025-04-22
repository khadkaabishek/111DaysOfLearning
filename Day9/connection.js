const mongoose = require("mongoose");
//MongoDB connection

async function connectMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
}

module.exports = { connectMongoDB };
