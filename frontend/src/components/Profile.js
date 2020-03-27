import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

class Profile extends React.Component {
  
  constructor() {
    super()
    this.state = {
      userInfo: {}
    }
  }

  componentDidMount() {
    const id = auth.getUserId()
    axios.get(`/api/user/${id}`)
      .then(res => this.setState({ userInfo: res.data }))
  }

  render() {
    if (!this.state.userInfo) return null
    const { username, email } = this.state.userInfo
    return <div>
      <h2>Username: {username}</h2>
      <p>{email}</p>
    </div>
  }
}

export default Profile





