import React from 'react'
import axios from 'axios'

class Profile extends React.Component {

  constructor(){
    super()
    this.state = {
      data: {
        email: null,
        username: null,
        totalQuizzes: null,
        totalPercentage: null,
        lastScore: null,
        totalCorrectAnswers: null,
        totalWrongAnswers: null
        
      }
    }
  }

  componentDidMount(){
    axios.get('/api/user/:id',
      this.state.data
    )
      .then(res => this.setState({ userDetails: res.data }))
    console.log(this.userDetails)
  }


  render(){
    return <>
    <h1>User Name: {this.state.data.username}</h1>
    <h2>eMail Address: {this.state.data.email}</h2>
    </>
  }
}

export default Profile