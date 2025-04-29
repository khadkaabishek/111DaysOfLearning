const express = require("express");
const router = express.Router();
const { handleHome } = require("../controller/home");
const { restrictTo } = require("../middlewares/middlewares");
router.get("/", restrictTo("NORMAL"), handleHome);

module.exports = router;
