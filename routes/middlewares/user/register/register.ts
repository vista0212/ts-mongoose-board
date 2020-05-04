import { Request, Response, NextFunction } from 'express';
import { IUser, User } from '@Model/user.model';
import { catchDBError } from '@Lib/error';

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { id, name }: IUser = req.body;
  const { password, passwordKey }: IUser = res.locals.temp;

  await User.create({ id, name, password, passwordKey }).catch(catchDBError(res));

  res.json({
    success: true,
  });
};

export default register;
