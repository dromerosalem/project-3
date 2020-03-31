import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

const CommentForm = ( { handleSubmit, handleChange } ) => {
  
  return <form
    onSubmit={handleSubmit}>
    <input 
      onChange={handleChange}
      type="text"
    />
    <button>Submit</button>
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
    <div className='commentsForm'>
      <h2>Here you can leave your comments and reviews</h2>
      <NewComment/>
    </div>
    <div className='listOfComments'>
      {this.state.comments.map((comment, i) => {
        const isOwner = this.isOwner(comment)
        console.log(comment) 
        return <div key={i}>
          <h3>{comment.user.username}</h3>
          <p>{comment.comment}</p>
          {isOwner && <button
            onClick={() => this.handeleDelete(comment)}
          >DELETE
          </button> }
        </div>     
      })}
    </div>
    
    
    </>
  }

}

export default Comments