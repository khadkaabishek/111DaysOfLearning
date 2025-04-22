const express = require("express");
const router = express.Router();
const {
  handleAllUsers,
  handleGetUserByID,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("./../controller/user");

router.route("/").get(handleAllUsers).post(handleCreateUser);
router
  .route("/:id")
  .get(handleGetUserByID)
  .put(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
