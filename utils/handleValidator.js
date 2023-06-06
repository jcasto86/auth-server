const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); //si no existe error en la validación, continúa a el controlador
  } catch (err) {
    res.status(403);
    res.send({ errors: err.array() });
  }
};

module.exports = validateResults;
