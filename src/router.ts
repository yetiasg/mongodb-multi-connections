import { Request, Response, Router } from 'express'
import { ProductModel } from './models/product.model'
import { UserModel } from './models/user.model'

export const router = Router()


router.get('/', async(req: Request, res: Response) => {
  res.status(200).json({message: 'rootRoute'})
})

router.get('/add-product', async(req: Request, res: Response) => {
  const addProduct = async() => {
    const product = new ProductModel({name: 'Buty', description: 'szybkie', price: 12 })
    await product.save()
  }
  await addProduct()

  res.status(200).json({message: 'done'})
})

router.get('/add-user', async(req: Request, res: Response) => {
  const addUser = async() => {
    const user = new UserModel({name:'Mati', lastName:'Żupa', email:'yetiasg@gmail.com'})
    await user.save()
  }
  await addUser()
  res.status(200).json({message: 'done'})
})
