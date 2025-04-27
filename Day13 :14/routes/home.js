const express = require("express");
const router = express.Router();
const { handleHome } = require("../controller/home");
router.get("/", handleHome);

module.exports = router;
