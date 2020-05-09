import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { IUser, User } from '@Model/user.model';
import { catchDBError, throwError } from '@Lib/error';

dotenv.config();

type DecodedToken = {
  _id: string;
};

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token: string | string[] = req.headers.token;
  const secretKey = process.env.SECRET_KEY;

  try {
    const decodedToken: DecodedToken = jwt.verify(token as string, secretKey) as DecodedToken;

    const user: IUser = await User.findOne({ _id: decodedToken._id }).catch(catchDBError(res));

    if (!user) {
      throwError(res, 'Wrong_Request', '잘못된 요청입니다.');
    }

    res.locals.user = user;
    next();
  } catch (err) {
    switch (err.name) {
      case 'JsonWebTokenError':
        throwError(res, 'Wrong_Request', '잘못된 토큰입니다.');
      case 'TokenExpiredError':
        throwError(res, 'Token_Expired', '토큰이 만료되었습니다');
      default:
        throwError(res, 'Unhandled_Error', '알 수 없는 오류입니다.');
    }
  }
};

export default verifyToken;
