import express from 'express';
const router= express.Router();
import {getProducts,getProductById, saveProduct} from "../controllers/productController.js";
router.route("/").get(getProducts).post(saveProduct)
router.route("/:id").get(getProductById)

export default router;
