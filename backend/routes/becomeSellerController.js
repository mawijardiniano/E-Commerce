import express from 'express';
import { Apply } from '../controllers/becomeSellerController.js';

const router = express.Router();


router.post('/apply', Apply); 

export default router;
