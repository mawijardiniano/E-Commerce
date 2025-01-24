import express from 'express';
import { createUser, getUsers } from '../controllers/manualAuthCotroller.js';

const router = express.Router();


router.post('/signup', createUser);
router.get('/users', getUsers);

export default router;
