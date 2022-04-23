const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const users = require('./users')
const DatabaseConnector = require('./DatabaseConnector')

const PORT = process.env.PORT || 3000
const dist = path.join(__dirname, '../../client/dist')

const app = express()
app.use(express.static(dist))
app.use(bodyParser.json())
app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(dist, 'index.html')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  DatabaseConnector.connectToDatabase()
})

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

function cleanup() {
  DatabaseConnector.closeDatabaseConnection()
  process.exit()
}
