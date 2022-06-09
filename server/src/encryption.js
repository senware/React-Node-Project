const bcrypt = require('bcrypt')

const saltRounds = 10

const encryption = {
  hash: async plainText => {
    return bcrypt.hash(plainText, saltRounds)
  },
  compare: async (plainText, hash) => {
    return bcrypt.compare(plainText, hash)
  },
}

module.exports = encryption
