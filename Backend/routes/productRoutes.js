import express from "express";
import { getProductById,getProducts } from "../controllers/productController.js";
const router = express.Router();

// Get all products
router.route('/').get(getProducts)

// Get a single product by ID
router.route('/:id').get(getProductById)

export default router;
