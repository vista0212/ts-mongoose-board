import { Request, Response, NextFunction } from 'express';
import { IUser, User } from 'models/user.model';
import { catchDBError, throwError } from '@Lib/error';

const userExistCheck = async (req: Request, res: Response, next: NextFunction) => {
  const { id }: IUser = req.body || undefined;

  const user: IUser = await User.findOne({ id }).catch(catchDBError(res));

  switch (req.path) {
    case '/login':
      if (!user) {
        throwError(res, 'Not_Found', '일치하는 정보가 없습니다.');
      }
      res.locals.user = user;
      next();
    case '/register':
      if (user) {
        throwError(res, 'Exist_Data', '이미 존재하는 아이디입니다.');
      }
      next();
  }
};

export default userExistCheck;
