import experss, { Request, Response } from 'express'
import dotenv from 'dotenv'

const app = experss()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: "rootRoute"})
})

app.get('/u', (req: Request, res: Response) => {
  res.status(200).json({message: "uRoutes"})
})

dotenv.config()
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`) 
})