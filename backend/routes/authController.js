import express from 'express';
import { signUpUser, signInUser, getUser } from '../controllers/authController.js';

const router = express.Router();

// Define routes
router.post('/signup', signUpUser);   // POST: Register a user
router.post('/signin', signInUser);  // POST: Authenticate user
router.get('/user/:uid', getUser);   // GET: Get user by UID

export default router;
