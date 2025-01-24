import express from 'express';
import { createUser, userLogin, getUserLoggedin } from '../controllers/manualAuthCotroller.js';
import authenticateToken from '../middleware/auth.js';
const router = express.Router();


router.post('/signup', createUser);
router.post('/login', userLogin)
router.get('/getLogged',authenticateToken, getUserLoggedin)

export default router;
