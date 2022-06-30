const UserModel = require('../models/user')


const signup = async formData => {
  const { username, password } = formData
  const user = new UserModel({
    username: username,
    password: password,
  })
  return user.save()
}

const getUser = username => {
  return UserModel.findOne({ username: username })
}

module.exports = { signup, getUser }
