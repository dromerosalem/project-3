const Score = require('../models/score')

function addScore(req, res) {
  const currentUser = req.currentUser 
  const id = req.params.id
  Score
    .findByIdAndUpdate(id)
}

module.exports {
  addScore
}