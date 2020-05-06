import { Router } from 'express';

//common
import userExistCheck from '@Middleware/user/userExistCheck';
import passwordEncryption from '@Middleware/user/passwordEncryption';
import checkValidation from '@Middleware/common/checkValidation';

//register
import register from '@Middleware/user/register/register';
import registerValidation from '@Middleware/user/register/_validation';

//login
import login from '@Middleware/user/login/login';
import loginValidation from '@Middleware/user/login/_validation';
import issueToken from '@Middleware/jwt/issueToken';

const router: Router = Router();

router.post('/register', registerValidation);
router.post('/login', loginValidation);

router.use(checkValidation);

router.post('/register', userExistCheck, passwordEncryption, register);
router.post('/login', userExistCheck, passwordEncryption, login, issueToken);

export default router;
