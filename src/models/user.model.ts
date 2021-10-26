import { Schema } from "mongoose"
import { IUser } from "../interfaces/user.interface";
import { userConnection } from "../dbconnection";

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
  }
}, { timestamps: true });

export const UserModel = userConnection?.model('User', userSchema)