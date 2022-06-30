const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
  token: {
    type: String,
  },
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
