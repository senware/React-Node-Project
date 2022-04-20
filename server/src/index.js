const path = require('path')
const express = require('express')

const PORT = process.env.PORT || 3000
const dist = path.join(__dirname, '../../client/dist')

const app = express()
app.use(express.static(dist))

app.get('/', (req, res) => {
  res.sendFile(dist, 'index.html')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
