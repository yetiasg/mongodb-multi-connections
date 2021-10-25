import experss, { Request, Response } from 'express'

const app = experss()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: "rootRoutes"})
})

app.get('/u', (req: Request, res: Response) => {
  res.status(200).json({message: "uRoutes"})
})

app.listen(5004, () => {
  console.log(`Listening on port: ${5004}`) 
})