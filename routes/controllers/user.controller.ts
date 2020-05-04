import { Router } from 'express';
import registerValidation from '@Middleware/user/register/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import userExistCheck from '@Middleware/user/userExistCheck';

const router: Router = Router();

router.post('/register', registerValidation);

router.use(checkValidation);

router.post('/register', userExistCheck);

export default router;
