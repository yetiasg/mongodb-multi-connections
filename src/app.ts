import experss, { Request, Response } from 'express'

const app = experss()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: "rootRoute"})
})

app.listen(5000, () => {
  console.log(`Listening on port: 5000`)
})