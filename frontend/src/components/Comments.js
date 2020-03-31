import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

const CommentForm = ( { handleSubmit, handleChange } ) => {
  
  return <form
    className='formForComments'
    onSubmit={handleSubmit}>
    <textarea 
      className='inputComment'
      onChange={handleChange}
      type="text"
    >
    </textarea>
    <button className='submitButton'>Submit</button>
  </form>
  
}


class NewComment extends React.Component{

  constructor(){
    super()
    this.state = { 
      
      comment: ''
      
    }
  }
  handleChange(event) {
    const comment =  event.target.value
    this.setState({ comment })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/comments',
      this.state,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(()=> location.reload())
      
  }
  render(){
    return <div>
      <CommentForm 
        handleSubmit={(event) => this.handleSubmit(event)}
        handleChange={(event) => this.handleChange(event)}
        
      />
    </div>
  }
}

class Comments extends React.Component {

  constructor() {
    super()
    this.state = {
      comments: []
      
    }
  }  
  
  componentDidMount(){
    axios.get('/api/comments')
      .then(res => {
        this.setState({ comments: res.data })
      })
  }

  handeleDelete(comment) {
    const id = comment._id
    axios.delete(`/api/comments/${id}`,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(()=> location.reload())
  }

  isOwner(comment) {
    return auth.getUserId() === comment.user.id
  }


  render() {
    console.log(this.state.comments)
    
    return <>
    <div className='columns'>
      <div className='commentsForm'>
        <h2>Leave your comments and reviews</h2>
        <NewComment/>
      </div>
      <div className='listOfComments'>
        {this.state.comments.map((comment, i) => {
          const isOwner = this.isOwner(comment)
          console.log(comment) 
          return <div className='commentInfo' key={i}>
            <div className="commentBox">
              <h4>{comment.user.username}</h4>
              <p>{comment.comment}</p>
            </div>
            {isOwner && <button
              className='deleteButton'
              onClick={() => this.handeleDelete(comment)}
            >DELETE
            </button> }
          </div>
        })}
      </div>
    </div>
    
    
    </>
  }

}

export default Comments