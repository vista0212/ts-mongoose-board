import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  _id: string;
  id: string;
  password: string;
  passwordKey: string;
  name: string;
}

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordKey: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model<IUser>('User', userSchema);
