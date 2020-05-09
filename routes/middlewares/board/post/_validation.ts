import { ValidationChain, body } from 'express-validator';

const postBoardValidation: ValidationChain[] = [
  body('title').isString(),
  body('content').isString(),
];

export default postBoardValidation;
