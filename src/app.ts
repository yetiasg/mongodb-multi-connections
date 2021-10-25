import experss, { Request, Response } from 'express'

const app = experss()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: "rootRoutes"})
})

app.get('/u', (req: Request, res: Response) => {
  res.status(200).json({message: "uRoutes"})
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`)
})