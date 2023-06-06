const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/job-positions");
const customHeader = require("../middleware/customHeader");
const {
  getItems,
  createItem,
  getItem,
} = require("../controllers/job-positions");

// TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);

router.post("/", validatorCreateItem, customHeader, createItem);

router.get("/:id", getItem);

module.exports = router;
