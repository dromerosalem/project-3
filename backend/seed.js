const mongoose = require('mongoose')
const User = require('./models/user')
// const Score = require('./models/score')
// const Comment = require('./models/comment')

const dbURI = 'mongodb://localhost/trivia-db'

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error, db) => {
    if (error) {
      return console.log(error)
    }
    console.log('Successfully connected to mongo!')
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            username: 'Alex',
            email: 'alex@alex.com',
            password: 'alex',
            passwordConfirmation: 'alex'
          },
          {
            username: 'Fortuny',
            email: 'fortuny@fortuny.com',
            password: 'fortuny',
            passwordConfirmation: 'fortuny'
          },
          {
            username: 'Yara',
            email: 'yara@yara.com',
            password: 'yara',
            passwordConfirmation: 'yara'
          },
          {
            username: 'David',
            email: 'david@david.com',
            password: 'david',
            passwordConfirmation: 'david'
          }
        ])
      })
      .then(user => console.log(`${'😃'.repeat(user.length)} created`))
      .then(() => console.log('Goodbye...'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)