const Score = require('../models/score')

function index(req, res) {
  
  Score
    .find()
    .populate('user')
    .then(score => {
      res.send(score)
    })
}

function postToIndex(req, res) {
  req.body.user = req.currentUser
  Score 
    .create(req.body)
    .then(score => {
      res.status(201).send(score)
    })
}

function getScore(req, res) {
  
  const id = req.params.id
  Score
    .findById(id)
    .populate('user')
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
  postToIndex,
  getScore,
  updateScore
}