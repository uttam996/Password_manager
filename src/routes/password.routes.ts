import express from 'express';

const router = express.Router();

import { GetAllPasswords, CreatePassword, GetPassword } from '../controller/password.controller';

router.get('/', GetAllPasswords);
router.post('/', CreatePassword);
router.get('/:id', GetPassword);


export default router;







