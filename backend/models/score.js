const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // gamesPlayed: { type: Number, required: true },
  right: { type: Number, default: 0, required: true },
  wrong: { type: Number, default: 0, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', require: true }
})

module.exports = mongoose.model('Score', schema)