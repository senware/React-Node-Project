const dbConn = require('./DatabaseConnector')
const express = require('express')
const router = express.Router()

router.post('/test', (req, res) => {
  dbConn
    .insertUser(req.body)
    .then(result => res.send(result))
    .catch(() => console.log('Failed to update database.'))
})

module.exports = router
