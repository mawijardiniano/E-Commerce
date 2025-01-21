import express from 'express'
import { uploadProduct } from "../controllers/productController.js"

const router = express.Router();

router.post('/upload-product', uploadProduct);

export default router;