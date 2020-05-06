import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { IUser } from '@Model/user.model';
import * as dotenv from 'dotenv';

dotenv.config();

const issueToken = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = res.locals.user;
  const secretKey: string = process.env.SECRET_KEY;

  const token: string = jwt.sign({ _id: user._id }, secretKey, { expiresIn: '1h' });

  res.json({
    success: true,
    token,
  });
};

export default issueToken;
