import { Request, Response, NextFunction } from 'express';
import { IUser } from '@Model/user.model';
import { throwError } from '@Lib/error';

const login = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = res.locals.user;
  const { password, passwordKey }: IUser = res.locals.temp;

  if (user.password !== password) {
    throwError(res, 'Wrong_Data', '잘못된 유저 정보입니다.');
  }

  res.locals.user = {
    ...res.locals.user,
    password,
    passwordKey,
  };

  next();
};

export default login;
