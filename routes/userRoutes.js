import express from "express";
const router = express.Router();
import { userRegister, userLogin, getMe } from '../controllers/userController.js'
import { protect } from "../middleware/authMiddleware.js"
router.post('/', userRegister);
router.post('/login', userLogin);
router.get('/me', protect,  getMe);

export { router as userRoutes };
