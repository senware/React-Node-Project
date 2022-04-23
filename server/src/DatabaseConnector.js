const { MongoClient, ServerApiVersion } = require('mongodb')

const uri =
  'mongodb+srv://sen0120:p7dxr1aEIlPGQKSf@sendb.gbncy.mongodb.net/projectdb?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

async function connectToDatabase(params) {
  client.connect(() => console.log(`Connected to database.`))
}

function closeDatabaseConnection() {
  client.close()
}

async function insertUser(params) {
  const collection = client.db('projectdb').collection('users')
  return new Promise((resolve, reject) => {
    collection
      .insertOne(params)
      .then(result => resolve(result))
      .catch(err => reject(err))
  })
}

module.exports = { connectToDatabase, closeDatabaseConnection, insertUser }
