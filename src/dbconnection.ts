// import mongoose, { Connection } from 'mongoose'
// import createError, { HttpError } from 'http-errors'

// const createNewConnection = (url:string):(Connection | HttpError | undefined) => {
//   try{
//     const conn:Connection = mongoose.createConnection(url)
//     // if(!conn) return new createError.InternalServerError()
//     console.log('connected!-------------------------------')
//     return conn
//   }catch(error){
//     console.log(error, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
//   }
// }
// export const userConnection = createNewConnection('mongodb://localhost:27018/user');
// export const productConnection = createNewConnection('mongodb://localhost:27018/product');


