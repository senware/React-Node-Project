const bcrypt = require('bcrypt')

const saltRounds = 10

const encryption = {
  hash: async plainText => {
    return bcrypt.hash(plainText, saltRounds)
  },
}

module.exports = encryption
