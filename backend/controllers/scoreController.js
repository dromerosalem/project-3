const Score = require('../models/score')

function index(req, res) {
  Score
    .find()
    .then(score => {
      res.send(score)
    })
}

function postToIndex(req, res) {
  Score 
    .create(req.body)
    .then(score => {
      res.status(201).send(score)
    })
}

function getScore(req, res) {
  const currentUser = req.currentUser
  req.body.user = currentUser
  Score
    .findById(currentUser.id)
    .then(score => {
      res.send(score)
    })
}

// function edit(req, res) {
//   // Edit a pancake
//   const currentUser = req.currentUser
//   const id = req.params.id
//   Pancake
//     .findById(id)
//     .then(pancake => {
//       if (!pancake.user.equals(currentUser._id)) return res.status(401).send({ message: 'Unauthorized' })
//       return pancake.set(req.body)
//     })
//     .then(pancake => {
//       return pancake.save()
//     })
//     .then(pancake => {
//       res.status(202).send(pancake)
//     })
// }

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