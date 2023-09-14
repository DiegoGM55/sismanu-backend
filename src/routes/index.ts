import { Router } from 'express';
import UserController from '../controllers/UserControllers';
import AuthController from '../controllers/AuthController';

const router = Router();

router.post('/users/createUser', UserController.createUser);
router.post('/users/authUser', AuthController.authUser);

export default router;