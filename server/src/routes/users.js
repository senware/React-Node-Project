const express = require('express')
const router = express.Router()
const { signup, getUser } = require('../controllers/users')
const encryption = require('../encryption')

router.post('/signup', (request, response, next) => {
  const { password, verifyPassword } = request.body
  if (password === verifyPassword) next()
  else {
    response.status(400)
    response.json({ message: 'Passwords do not match' })
  }
})

router.post('/signup', (request, response, next) => {
  getUser(request.body.username)
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

router.post('/signup', async (request, response, next) => {
  request.body.password = await encryption.hash(request.body.password)
  next()
})

router.post('/signup', (request, response) => {
  const user = {
    username: request.body.username,
    password: request.body.password,
  }
  signup(user)
    .then(result => response.send(result))
    .catch(err => response.json({ message: err }))
})

router.post('/login', (request, response) => {
  const { username, password } = request.body
  getUser(username).then(async user => {
    if (user === null) {
      response.status(400)
      response.json({ message: 'Username does not exist' })
      return
    }
    const hash = user.password
    const match = await encryption.compare(password, hash)
    if (match) {
      response.json(user)
      return
    }
    response.status(400)
    response.json({ message: 'Incorrect password' })
  })
})

module.exports = router
