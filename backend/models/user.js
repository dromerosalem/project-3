const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const scoreSchema = new mongoose.Schema({
  right: { type: Number, default: 0 },
  wrong: { type: Number, default: 0 }
})

const schema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  score: scoreSchema
},
{
  toJSON: {
    transform(doc, json) {
      return {
        email: json.email,
        username: json.username,
        id: json._id,
        score: json.score
      }
    }
  }
})

schema.plugin(require('mongoose-unique-validator'))

schema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

schema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'should match')
    }
    next()
  })

schema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

schema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', schema)

