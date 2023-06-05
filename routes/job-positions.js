const express = require("express");
const router = express.Router();
const { getItems } = require("../controllers/job-positions");

// TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);

module.exports = router;
