import mongoose, { Schema } from "mongoose"
import { IUser } from "../interfaces/user.interface";

// const conn = mongoose.createConnection('mongodb://localhost:27018/user')

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

export const UserModel = mongoose.model('User', userSchema)