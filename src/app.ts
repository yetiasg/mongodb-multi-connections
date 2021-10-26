import experss, { Request, Response } from 'express'
import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
// import { ProductModel } from './models/product.model'
import { UserModel } from './models/user.model'
import { HttpError } from 'http-errors'

const app = experss()

app.get('/', async(req: Request, res: Response) => {
  res.status(200).json({message: 'rootRoutes'})
})

app.get('/add-product', async(req: Request, res: Response) => {

  // const addProduct = async() => {
  //   const product = new ProductModel({name: 'Buty', description: 'szybkie', price: 12 })
  //   await product.save()
  // }
  // addProduct()

  res.status(200).json({message: 'done'})
})

app.get('/add-user', async(req: Request, res: Response) => {
  const addUser = async() => {
    console.log('creating user-----------------------------------------------')
    const user = new UserModel({name:'Mati', lastName:'Żupa', email:'yetiasg@gmail.com'})
    console.log('added user-----------------------------------------------')
    await user.save()
    console.log('saved user-----------------------------------------------')
  }
  await addUser()
  res.status(200).json({message: 'done'})
})



mongoose.connect('mongodb://mongodb-db1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions).then(() => {
  dotenv.config()
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`) 
  })
}).catch(err => console.log(err, '-------------------------------'))