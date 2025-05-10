const express = require("express");
const router = express();

router.get("/", (req, res) => {
  console.log(req.user.profileImageUrl);
  return res.render("profile", {
    user: req.user,
  });
});
module.exports = router;
