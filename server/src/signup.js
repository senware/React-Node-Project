const SignupModel = require('./models/SignupModel')

const signup = async formData => {
  const userData = new SignupModel({
    username: formData.username,
    password: formData.password,
  })
  return userData.save()
}
const checkUsername = username => {
  return SignupModel.findOne({ username: username })
}

module.exports = { signup, checkUsername }
