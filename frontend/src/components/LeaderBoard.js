import React from 'react'
import axios from 'axios'

class LeaderBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }))
    console.log(this.state.users)
  }

  render() {
    if (!this.state.users) return null
    const arrayOfUsers = this.state.users
    arrayOfUsers.sort((a, b) => (a.score.right < b.score.right) ? 1 : -1)
    return <>
      {arrayOfUsers.map((user, i) => {
        return <div key={i}>
          {user.username}: {user.score.right}
        </div>
      })}
    </>
  }
}

export default LeaderBoard