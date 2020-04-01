import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      user: {
        score: {}
      }
    }
  }

  componentDidMount() {
    const id = auth.getUserId()
    axios.get(`/api/user/${id}`)
      .then(res => this.setState({ user: res.data }))
  }

  render() {
    if (!this.state.user) return null
    const { username, score } = this.state.user
    const percentage = score.right / (score.right + score.wrong) * 100
    return <div className="flex-container">
      <h1>{username}</h1>
      <div className="profile">
        <p>Correct answers: {score.right}</p>
        <p>Incorrect answers: {score.wrong}</p>
        <p>Percentage: {parseInt(percentage)}%</p>
      </div>
    </div>
  }
}

export default Profile
