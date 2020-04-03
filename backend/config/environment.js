const secret = 'this is a secret'
const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/trivia-db'
module.exports = {
  secret,
  port,
  dbURI
}

