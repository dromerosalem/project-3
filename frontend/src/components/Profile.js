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

  // componentDidMount(){
  //   axios.get('/Login',
  //     this.state.data
  //   )
  //     .then(res => this.setState({ userDetails: res.data }))
  //   console.log(this.userDetails)
  // }


  render(){
    return <>
    <h1>User Name: {this.data.username}</h1>
    <h2>eMail Address: {this.data.email}</h2>
    </>
  }

}


export default Profile