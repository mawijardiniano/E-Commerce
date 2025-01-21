import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

// Define routes
router.post('/users', createUser); // POST: Create a new user
router.get('/users', getUsers);   // GET: Retrieve all users

export default router;
