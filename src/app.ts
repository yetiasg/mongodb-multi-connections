import express, {Request, Response} from 'express'
import { ErrorException } from './ErrorException'
import { config } from './config'
import morgan from 'morgan'
import cors from 'cors'

import { router as rootRouter} from './router'

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use(rootRouter)

app.use((req:Request, res:Response) => {
  res.status(404).json({message: "Route not found - Error 404"})
})

app.use((err:ErrorException, req:Request, res:Response) => {
  const status = err.status
  const message = err.message
  res.status(404).json({
    error: {
      status,
      message
    }
  })
})

import './dbconnection'
app.listen(config.server.PORT, () => {
  console.log(`Listening on port: ${config.server.PORT}`) 
})
