import { Router } from 'express';
import userRegister from './userRegister';

const router = Router();

router.post('/', userRegister); //localhost:5000/user

export default router;
