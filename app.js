import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

// import db from'./config/db.js'
import morgan from'morgan'
// import userRouter from'./routes/user.js'
// import queryRouter from'./routes/query.js'
// import productRouter from'./routes/product.js'
// import quoationRouter from'./routes/quotation.js'
import router from './routes.js'

import cors from 'cors'


const port = process.env.PORT || 3000

// await db()

app.use(morgan(':method :url :status :response-time ms'))

app.use(cors())
app.use(express.json())

app.use('/seon', router)
// app.use('/api/user', userRouter)
// app.use('/api/query', queryRouter)
// app.use('/api/product', productRouter)
// app.use('/api/quotation', quoationRouter)


const server = app.listen(port, () => console.log(`server has started on port ${port}`))

export default server