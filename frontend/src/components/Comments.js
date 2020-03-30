import React from 'react'
import axios from 'axios'
import NewComment from './NewComment'
// import auth from '../lib/auth'

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


  render() {
    console.log(this.state.comments)
    
    return <>
    {this.state.comments.map((e, i) => {
      console.log(e) 
      return <div key={i}>
        <h2>{e.user.username}</h2>
        <p>{e.comment}</p>
      </div>     
    })}
    
    <NewComment/>
    </>
  }

}




export default Comments