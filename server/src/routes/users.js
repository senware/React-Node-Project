const express = require('express')
const router = express.Router()
const { signup, getUser } = require('../controllers/users')
const encryption = require('../encryption')
const jwt = require('jsonwebtoken')

// make sure passwords match
router.post('/signup', (request, response, next) => {
  const { password, confirmPassword } = request.body
  if (password === confirmPassword) next()
  else {
    response.status(400)
    response.json({ message: 'Passwords do not match' })
  }
})

// make sure username doesnt already exist
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

// hash the password
router.post('/signup', async (request, response, next) => {
  request.body.password = await encryption.hash(request.body.password)
  next()
})

// sign up a new user with hashed password
router.post('/signup', async (request, response) => {
  const { username, password } = request.body
  const userData = {
    username: username,
    password: password,
  }
  const user = await signup(userData)
  user.token = jwt.sign(
    { user_id: user._id, username },
    process.env.TOKEN_KEY,
    { expiresIn: '2h' }
  )
  response.status(201).json(user)
})

// log the user in
router.post('/login', async (request, response) => {
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
      user.token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        { expiresIn: '2h' }
      )
      response.json(user)
      return
    }
    response.status(400)
    response.json({ message: 'Incorrect password' })
  })
})

module.exports = router
