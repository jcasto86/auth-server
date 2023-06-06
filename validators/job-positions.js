const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  check("title").exists().notEmpty().isLength({ min: 3, max: 25 }),
  check("description").exists().notEmpty().isLength({ min: 5, max: 100 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateItem, validatorGetItem };
