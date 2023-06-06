const express = require("express");
const router = express.Router();
const uploadMiddleWare = require("../utils/handleStorage");
const { createItem } = require("../controllers/storage");

router.post("/", uploadMiddleWare.single("myFile"), createItem);

module.exports = router;
