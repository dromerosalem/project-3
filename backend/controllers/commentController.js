const Comment = require('../models/comment')

function commentCreate(req, res){
  req.body.user = req.currentUser
  Comment
    .create(req.body)
    .then(post => {
      res.status(201).send(post)
    })
}

function commentDelete(req, res) {
  // const currentUser = req.currentUser
  // const id = req.params.id
  Comment
    .findById(req.params.commentId)
  
    .then(post => {
      console.log(post)
      if (!post) return res.status(401).send({ message: 'Unauthorized' })
      // const comment = post._id(req.params.commentId)
      // comment.remove()
      return post.remove()
    }) 
    .then(() => res.status(200).json({ message: 'comment deleted' }))
    .catch(err => console.log(err))
}

module.exports = {
  commentCreate,
  commentDelete
}