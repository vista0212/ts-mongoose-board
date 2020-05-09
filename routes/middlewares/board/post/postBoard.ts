import { Request, Response, NextFunction } from 'express';
import { IBoard, Board } from '@Model/board.model';
import { IUser } from '@Model/user.model';
import { catchDBError } from '@Lib/error';

const postBoard = async (req: Request, res: Response, next: NextFunction) => {
  const { title, content }: IBoard = req.body;
  const user: IUser = res.locals.user;

  const board: IBoard = await Board.create({ title, content, _user: user._id }).catch(
    catchDBError(res)
  );

  res.json({
    success: true,
    data: board,
  });
};

export default postBoard;
