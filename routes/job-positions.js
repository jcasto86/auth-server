const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRole = require("../middleware/rol");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/job-positions");
// const customHeader = require("../middleware/customHeader");
const {
  getItems,
  createItem,
  getItem,
  updateItems,
  deleteItem,
} = require("../controllers/job-positions");

// TODO http://localhost/tracks GET, POST, DELETE, PUT

/**
 * Get Items.
 * Here, we use authMiddleware to only allow do this to logged in users.
 */
router.get("/", authMiddleware, getItems);

/**
 * Get Item detail.
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * Create Items.
 */
router.post(
  "/",
  authMiddleware,
  checkRole(["admin"]),
  validatorCreateItem,
  createItem
);

/**
 * Update Item.
 */
router.put(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItems
);

/**
 * Delete Item.
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
