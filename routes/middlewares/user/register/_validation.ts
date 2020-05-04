import { ValidationChain, body } from 'express-validator';

const registerValidation: ValidationChain[] = [
  body('id').isString(),
  body('password').isString(),
  body('name').isString(),
];

export default registerValidation;
