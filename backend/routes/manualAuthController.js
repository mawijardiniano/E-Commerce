import express from 'express';
import { createUser, getUsers, userLogin } from '../controllers/manualAuthCotroller.js';

const router = express.Router();


router.post('/signup', createUser);
router.post('/login', userLogin)
router.get('/users', getUsers);

export default router;
