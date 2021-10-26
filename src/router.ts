import { Request, Response, Router, NextFunction } from 'express'
import { ProductModel } from './models/product.model'
import { UserModel } from './models/user.model'

export const router = Router()

router.get('/', async(req: Request, res: Response) => {
  res.status(200).json({message: 'rootRoute'})
})

router.get('/add-product', async(req: Request, res: Response, next:NextFunction) => {
  try{
    await addProduct()
    res.status(200).json({message: 'product added'})
  }catch(error){
    next(error)
  }
})

router.get('/add-user', async(req: Request, res: Response, next:NextFunction) => {
  try{
    await addUser()
    res.status(200).json({message: 'user added'})
  }catch(error){
    next(error)
  }
})



const addProduct = async() => {
  const product = new ProductModel({name: 'Buty', description: 'szybkie', price: 12 })
  await product.save()
}

const addUser = async() => {
  const user = new UserModel({name:'Mati', lastName:'Żupa', email:'yetiasg@gmail.com'})
  await user.save()
}