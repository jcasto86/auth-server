const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");
const JobPosition = require("../models/JobPosition");

const crearUsuario = async (req, res = response) => {
  const { email, name, password } = req.body;

  try {
    // Verify email
    const usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "The user already exists with this email",
      });
    }

    // Create user
    const dbUser = new Usuario(req.body);

    // Hash password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    // Generate JSON Web Token
    const token = await generarJWT(dbUser.id, name);

    // Create DB user
    await dbUser.save();

    // Generate successfull response
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name: name,
      email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: true,
      msg: "Contact the administrator",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const dbUser = await Usuario.findOne({ email });

    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "No accounts registered with this email",
      });
    }
    // Confirm if password matches
    const validPassword = bcrypt.compareSync(password, dbUser.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Incorrect password. Please, try again",
      });
    }

    // Generate JSON Web Token
    const token = await generarJWT(dbUser.id, dbUser.name);

    // Server response
    return res.json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const { uid } = req;

  // Leer base de datos
  const dbUser = await Usuario.findById(uid);

  // Generar JWT (JSON Web Token)
  const token = await generarJWT(uid, dbUser.name);

  return res.json({
    ok: true,
    uid,
    name: dbUser.name,
    email: dbUser.email,
    token,
  });
};

const addJobPosition = async (req, res = response) => {
  const {
    logoHref,
    logoSrc,
    logoAltText,
    position,
    startDate,
    endDate,
    city,
    remote,
    description,
  } = req.body;

  try {
    // // Verify email
    // const usuario = await Usuario.findOne({ email });

    // if (usuario) {
    //   return res.status(400).json({
    //     ok: false,
    //     msg: "The user already exists with this email",
    //   });
    // }

    // Create Job Position
    const dbJobPosition = new JobPosition(req.body);

    // // Generate JSON Web Token
    const token = await generarJWT(dbJobPosition.id, position);

    // Create DB user
    // await dbUser.save();
    await dbJobPosition.save();

    // Generate successfull response
    return res.status(201).json({
      ok: true,
      uid: dbJobPosition.id,
      logoHref,
      logoSrc,
      logoAltText,
      position,
      startDate,
      endDate,
      city,
      remote,
      description,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: true,
      msg: "Contact the administrator",
    });
  }
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
  addJobPosition,
};
