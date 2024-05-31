/** @format */

const express = require("express");
const { authUser, registerUser } = require("../controller/userController");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/auth").post(authUser);
module.exports = router;
