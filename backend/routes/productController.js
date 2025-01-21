import express from 'express'
import { uploadProduct,getProduct } from "../controllers/productController.js"

const router = express.Router();
router.get('/fetch-product', getProduct)
router.post('/upload-product', uploadProduct);

export default router;