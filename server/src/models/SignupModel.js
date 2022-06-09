const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

const SignupModel = mongoose.model('User', signupSchema)

module.exports = SignupModel
