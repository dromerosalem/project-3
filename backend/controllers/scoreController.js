const Score = require('../models/score')

function index(req, res) {
  Score
    .find()
    .then(score => {
      res.send(score)
    })
}


function getScore(req, res) {
  // const currentUser = req.currentUser
  // req.body.user = currentUser
  Score
    .findById(req.params.id)
    .then(score => {
      res.send(score)
    })
}

function updateScore(req, res) {
  const id = req.params.id
  Score
    .findById(id)
    .then(score => {
      return score.save()
    })
    .then(score => {
      res.status(202).send(score)
    })
}

module.exports = {
  index,
  getScore,
  updateScore
}