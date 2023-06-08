const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const getProperties = require("../utils/handlePropertiesEngine");
const keyProperties = getProperties();

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NOT_LOGGED_IN_ERROR", 401);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken) {
      handleHttpError(res, "NOT_DATA_TOKEN_ERROR", 401);
      return;
    }

    const query = {
      [keyProperties.id]: dataToken[keyProperties.id],
    };

    const user = await usersModel.findOne(query);
    console.log("USER: ", user);
    req.user = user;
    console.log("REQ.USER: ", user);

    next();
  } catch (e) {
    handleHttpError(res, "NO_SESSION_ERROR", 401);
  }
};

module.exports = authMiddleware;

// const { handleHttpError } = require("../utils/handleError");
// const { verifyToken } = require("../utils/handleJwt");
// const { handleHttpError } = require("../utils/handleError");
// const { verifyToken } = require("../utils/handleJwt");
// const { usersModel } = require("../models");
// const getProperties = require("../utils/handlePropertiesEngine");
// const keyProperties = getProperties();

// const authMiddleware = async (req, res, next) => {
//   try {
//     if (!req.headers.authorization) {
//       handleHttpError(res, "NOT_LOGGED_IN_ERROR", 401);
//       return;
//     }

//     console.log("REQ.HEADERS: ", req.headers);

//     const token = req.headers.authorization.split(" ").pop();
//     console.log("TOKEN: ", token);

//     const dataToken = await verifyToken(token);
//     console.log("DATATOKEN: ", dataToken);

//     if (!dataToken._id) {
//       console.log("HOLAAAAAA", dataToken._id);
//       handleHttpError(res, "ID_TOKEN_ERROR", 401);
//       return; // Return early after sending the error response
//     }

//     next(); // Call next middleware or route handler
//   } catch (error) {
//     handleHttpError(res, "NO_SESSION_ERROR", 401);
//   }
// };

// module.exports = authMiddleware;

/**
 * INTENTO SOLUCION CHATGPT
 */

// const { handleHttpError } = require("../utils/handleError");
// const { verifyToken } = require("../utils/handleJwt");

// const authMiddleware = async (req, res, next) => {
//   try {
//     if (!req.headers.authorization) {
//       handleHttpError(res, "NOT_LOGGED_IN_ERROR", 401);
//       return;
//     }

//     //Here, as it gets the full phrase: "bearer alifuapfijaslkTOKEN", and we just need the token, we split it ant take just what we need.
//     const token = req.headers.authorization.split(" ").pop();
//     console.log("TOKEN: ", token);

//     const dataToken = await verifyToken(token);
//     console.log("DATATOKE: ", dataToken);

//     if (!dataToken._id) {
//       console.log(dataToken);
//       handleHttpError(res, "ID_TOKEN_ERROR", 401);
//     }

//     next();
//   } catch (error) {
//     handleHttpError(res, "NO_SESSION_ERROR", 401);
//   }
// };

// module.exports = authMiddleware;
