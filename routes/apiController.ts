import { Router } from 'express';

import userController from './controllers/user.controller';

const router: Router = Router();

router.use('/user', userController);

export default router;
