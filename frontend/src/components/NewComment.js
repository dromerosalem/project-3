import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
import CommentForm from './CommentForm'

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


export default NewComment

