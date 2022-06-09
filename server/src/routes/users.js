const express = require('express')
const router = express.Router()
const { signup, checkUsername } = require('../signup')
const encryption = require('../encryption')
const { response } = require('express')

router.post('*', (request, response, next) => {
  checkUsername(request.body.username)
    .then(exists => {
      if (exists) {
        response.status(400)
        response.json({ message: 'Username already exists' })
      } else next()
    })
    .catch(err => {
      response.json({ message: err })
    })
})

router.post('*', async (request, response, next) => {
  request.body.password = await encryption.hash(request.body.password)
  next()
})

router.post('/signup', (req, res) => {
  signup(req.body)
    .then(result => res.send(result))
    .catch(err => response.json({ message: err }))
})

module.exports = router
