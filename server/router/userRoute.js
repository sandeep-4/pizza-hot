const express = require("express");
const {
  register,
  login,
  getAllUsers,
  deleteUsers,
} = require("../contollers/user");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getallusers", getAllUsers);
router.post("/deleteuser", deleteUsers);

module.exports = router;
