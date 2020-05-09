import * as mongoose from 'mongoose';
import { IUser } from './user.model';
import { IComment } from './comment.model';

export interface IBoard extends mongoose.Document {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  _user: IUser['_id'];
  comment: IComment[];
}

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    default: Date.now(),
  },
});

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  comments: [commentSchema],
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
});

export const Board = mongoose.model<IBoard>('Board', boardSchema);
