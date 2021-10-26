import { Document, ObjectId } from 'mongoose'

export interface IUser extends Document {
  _id?: ObjectId,
  name: string,
  lastName: string,
  email: string
}