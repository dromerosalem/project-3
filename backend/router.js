const router = require('express').Router()
const userController = require('./controllers/userController')
const secureRoute = require('./lib/secureRoute')

router.route('/register')
  .post(userController.register)

router.route('/login')
  .post(userController.login)

router.route('/user/:id')
  .get(userController.getUserInfo)
  .put(secureRoute, userController.editUserInfo)

module.exports = router 