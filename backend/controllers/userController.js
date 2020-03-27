const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(200).json({ message: `Hi ${user._id}! Let's change the way you do food..` })) // evaluate if welcome message set up correctly
    .catch(next)
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user.validatePassword(req.body.password)){
        return res.status(401).send({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '48h' } )
      res.status(202).send({ message: `Welcome back ${user.username}`, token })
    })
}

function getUserInfo(req, res) {
  const id = req.params.id
  User
    .findById(id)
    .then(userInfo => {
      res.send(userInfo)
    })
}

function editUserInfo(req, res) {
  const currentUser = req.currentUser._id
  const id = req.params.id
  User
    .findById(id)
    .then(userInfo => {
      if (!userInfo.user.equals(currentUser._id)) return res.status(401).send({ message: 'Unauthorized' })
      return userInfo.set(req.body)
    })
    .then(userInfo => {
      return userInfo.save()
    })
    .then(userInfo => {
      res.status(202).send(userInfo)
    })
}

function index (req, res) {
  User
    .find()
    .then(users => {
      console.log(users)
      res.send(users)
    })
}




module.exports = {
  register,
  login,
  index,
  getUserInfo,
  editUserInfo
}