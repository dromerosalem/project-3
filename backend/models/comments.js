const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  comments: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', require: true } 
})

module.export = mongoose.model('Comments', schema)
