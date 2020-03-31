import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

class Profile extends React.Component {

  constructor() {
    super()
    this.state = {
      userInfo: {},
      scoreInfo: {}
    }
  }

  componentDidMount() {
    const id = auth.getUserId()
    // const _id = this.state.scoreInfo.user._id
    axios.get(`/api/user/${id}`)
      .then(res => this.setState({ userInfo: res.data }))
    // axios.get(`/api/score/${_id}`)
    //   .then(res => this.setState({ scoreInfo: res.data }))
  }

  render() {
    if (!this.state.userInfo) return null
    const { username, email } = this.state.userInfo
    return <div>
      <h2>Username: {username}</h2>
      <p> Email: {email}</p>
      <p>Score: {this.state.scoreInfo.right}</p>
    </div>
  }
}

export default Profile
