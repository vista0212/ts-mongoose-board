import { Router } from 'express';

import userController from './controllers/user.controller';
import boardController from './controllers/board.controller';
import verifyToken from '@Middleware/jwt/verifyToken';

const router: Router = Router();

router.use('/user', userController);

router.use(verifyToken);

router.use('/board', boardController);

export default router;
