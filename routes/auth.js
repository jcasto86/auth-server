const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { registerCtrl, loginCtrl } = require("../controllers/auth");

/**
 * Register.
 */
router.post("/register", validatorRegister, registerCtrl);

/**
 * Login
 */
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
