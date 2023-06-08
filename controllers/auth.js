const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { compare } = require("bcrypt");

/**
 * Manage User Registration.
 * @param {*} req
 * @param {*} res
 */
const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "REGISTER_USER_ERROR");
  }
};

/**
 * Manage User Login.
 * @param {*} req
 * @param {*} res
 */
const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel
      .findOne({ email: req.email })
      .select("password name role email");

    console.log("USER: ", user);
    if (!user) {
      handleHttpError(res, "THIS_IS_NOT_A_USER", 404);
      return;
    }

    const hashPassword = user.get("password");
    console.log("hashPassword", hashPassword);

    const check = await compare(req.password, hashPassword);
    console.log("CHECK: ", check);

    if (!check) {
      handleHttpError(res, "INVALID_PASSWORD", 401);
      return;
    }

    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "LOGIN_USER_ERROR");
  }
};

module.exports = { registerCtrl, loginCtrl };
