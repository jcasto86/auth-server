const express = require("express");
const router = express.Router();
const uploadMiddleWare = require("../utils/handleStorage");
const { createItems } = require("../controllers/storage");

router.post("/", uploadMiddleWare.single("myFile"), createItems);

module.exports = router;
