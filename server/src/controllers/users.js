const UserModel = require('../models/SignupModel')

const signup = async formData => {
  const userData = new UserModel({
    username: formData.username,
    password: formData.password,
  })
  return userData.save()
}

const getUser = username => {
  return UserModel.findOne({ username: username })
}

module.exports = { signup, getUser }
