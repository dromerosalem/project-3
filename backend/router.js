const router = require('express').Router()
const userController = require('./controllers/userController')
const commentController = require('./controllers/commentController')
const secureRoute = require('./lib/secureRoute')

router.route('/register')
  .post(userController.register)

router.route('/login')
  .post(userController.login)

router.route('/users')
  .get(userController.index)

router.route('/user/:id')
  .get(userController.getUserInfo)
  .put(secureRoute, userController.editUserInfo)

router.route('/comments')
  .post(secureRoute, commentController.commentCreate)

router.route('/comments/:commentId')
  .delete(secureRoute, commentController.commentDelete)
module.exports = router 