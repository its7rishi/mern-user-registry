const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()

//ROUTES
const users = require('./routes/api/userRoutes.js')

const app = express()

//CONNECT DB
let connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(console.log('MondoDB is connected....'))
    .catch((err) => console.error(err))
}
connectDB()

//CORS
app.use(cors({ origin: true, credentials: true }))

//Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello World'))

//USE ROUTES
app.use('/api/users', users)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port: ${port}`))
