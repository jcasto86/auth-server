const express = require("express");
const router = express.Router();
const {
  getItems,
  createItems,
  getItem,
} = require("../controllers/job-positions");

// TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);

router.post("/", createItems);

router.get("/:id", getItem);

module.exports = router;
