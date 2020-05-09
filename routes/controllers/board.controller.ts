import { Router } from 'express';
import postBoardValidation from '@Middleware/board/post/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import postBoard from '@Middleware/board/post/postBoard';

const router: Router = Router();

router.post('/', postBoardValidation);

router.use(checkValidation);

router.post('/', postBoard);

export default router;
