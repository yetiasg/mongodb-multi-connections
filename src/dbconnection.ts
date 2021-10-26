import mongoose, { Connection, ConnectOptions } from 'mongoose'
import createError, { HttpError } from 'http-errors'

const createNewConnection = (url:string, options:ConnectOptions):(Connection | HttpError | undefined) => {
  try{
    const conn = mongoose.createConnection(url, options)
    if(!conn) throw new createError.InternalServerError('Sth went wrong with DB connection')
    return conn
  }catch(error){
    console.log(error)
  }
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions

export const userConnection = createNewConnection('mongodb://mongodb-users:27018/users', options)
export const productConnection = createNewConnection('mongodb://mongodb-products:27019/products', options)


