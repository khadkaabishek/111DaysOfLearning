const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },

  { timestamp: true }
);

const UserData = mongoose.model("User", userschema);
module.exports = UserData;
