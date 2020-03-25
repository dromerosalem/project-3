const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  score: { type: Number, required: true },
  right: { type: Number, required: true },
  wrong: { type: Number, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', require: true }
})

module.exports = mongoose.model('Score', schema)