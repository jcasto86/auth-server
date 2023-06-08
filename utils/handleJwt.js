const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Must pass User Object
 */
const tokenSign = async () => {
  const sign = await jwt.sign(
    {
      _id: URLSearchParams._id,
      role: URLSearchParams.role,
    },
    JWT_SECRET,
    {
      expiresIn: "3h",
    }
  );

  return sign;
};

/**
 * Must provide session token jwt
 * @param {*} tokenJwt
 * @returns
 */
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
