const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  score: { type: Number, require: true },
  right: { type: Number, require: true },
  wrong: { type: Number, require: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', require: true }
})

module.export = mongoose.model('Score', schema)