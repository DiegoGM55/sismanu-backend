import { Router } from 'express';
import UserController from '../controllers/UserControllers';

const router = Router();

router.post('/users/createUser', UserController.createUser);

export default router;