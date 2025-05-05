const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  age: Number,
  profession: String,
  salary: Number,
});

module.exports = mongoose.model("User", userSchema);
