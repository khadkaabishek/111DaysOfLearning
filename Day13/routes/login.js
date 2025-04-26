const express = require("express");
const router = express.Router();
const { handleLogin } = require("./../controller/signup");

router.get("/", handleLogin);
module.exports = router;
