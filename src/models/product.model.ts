import mongoose, { Schema } from "mongoose"
import { IProduct } from "../interfaces/product.interface";
import { productConnection } from "../dbconnection";
// const conn = mongoose.createConnection('mongodb://mongodb-products:27019/products')

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export const ProductModel = productConnection?.model('Product', productSchema)
