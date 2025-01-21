import express from 'express';
import { signUpUser, signInUser, getUser } from '../controllers/authController.js';

const router = express.Router();


router.post('/signup', signUpUser); 
router.post('/signin', signInUser); 
router.get('/user/:uid', getUser);  

export default router;
