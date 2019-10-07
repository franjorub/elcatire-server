import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: String,
  identification: String,
  password: String,
});

export interface Users {
  _id: string;
  name: string;
  identification: string;
  password: string;
}
