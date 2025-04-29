const express = require("express");
const router = express.Router();
const { handleHome } = require("../controller/home");
// const { restrictTo } = require("../middlewares/middlewares");
router.get("/", handleHome);

module.exports = router;
