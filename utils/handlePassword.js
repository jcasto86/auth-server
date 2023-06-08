const bcrypt = require("bcrypt");

/**
 * Non encrypted password.
 * @param {*} passwordPlain
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcrypt.hash(passwordPlain, 8);
  //here we obtain the encrypted version of the password
  return hash;
};

/**
 * Compare non encrypted and encrypted.
 * @param {*} passwordPlain
 * @param {*} hashPassword
 */
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
