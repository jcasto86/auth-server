const express = require("express");
const router = express.Router();
const uploadMiddleWare = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const {
  getItems,
  getItem,
  deleteItem,
  createItem,
} = require("../controllers/storage");

/**
 * Get All Items.
 */
router.get("/", getItems);

/**
 * Get Item Detail.
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Delete Item.
 */
router.delete("/:id", validatorGetItem, deleteItem);

/**
 * Insert New Item
 */
router.post("/", uploadMiddleWare.single("myFile"), createItem);

module.exports = router;
