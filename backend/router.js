const router = require('express').Router()
const userController = require('./controllers/userController')
const commentController = require('./controllers/commentController')
const scoreController = require('./controllers/scoreController')
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
  .get( commentController.allComments)

router.route('/comments/:commentId')
  .delete(secureRoute, commentController.commentDelete)

router.route('/score/:id')
  .get(secureRoute, scoreController.getScore)
  .put(secureRoute, scoreController.updateScore)

module.exports = router 