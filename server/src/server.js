const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const users = require('./routes/users')

dotenv.config()

const PORT = process.env.PORT || 3000
const dist = path.join(__dirname, '../../client/dist')

const app = express()
app.use(express.static(dist))
app.use(express.json())
app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(dist, 'index.html')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log('Database connected.')
  })
})
