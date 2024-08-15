const express = require("express");
const router = express.Router();
const Product = require("../model/product.model.js");
const {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers.js");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
