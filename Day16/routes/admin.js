const express = require("express");
const UserData = require("../models/user");
const { restrictTo } = require("../middlewares/middlewares");
const router = express.Router();

router.get("/allUserData", restrictTo(["ADMIN"]), async (req, res) => {
  const data = await UserData.find({});
  return res.json(data);
});
module.exports = router;
