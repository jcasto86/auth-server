const express = require("express");
const router = express.Router();
const { validatorRegister } = require("../validators/auth");
const { loginCtrl } = require("../controllers/auth");

/**
 * Register.
 */
router.post("/register", validatorRegister, loginCtrl);

/**
 * Login
 */
router.post("/login");

module.exports = router;
