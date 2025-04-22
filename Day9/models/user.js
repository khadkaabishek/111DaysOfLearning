const mongoose = require("mongoose");

//Schema Design
const userSchema = new mongoose.Schema(
  {
    first_Name: {
      type: String,
      required: true,
    },
    last_Name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//Model Design
const Users = mongoose.model("user", userSchema);

module.exports = Users;
