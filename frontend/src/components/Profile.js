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
    return <div>
      <h2>Username: {username}</h2>
      <p>Right answers: {score.right}</p>
      <p>Wrong answers: {score.wrong}</p>
      <p>Percentage: {percentage}%</p>
    </div>
  }
}

export default Profile
