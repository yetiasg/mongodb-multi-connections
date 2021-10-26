import { ObjectId } from "bson";

export interface IProduct{
  _id?:ObjectId,
  name:string,
  description:string,
  price:number,
  owner?:string
}