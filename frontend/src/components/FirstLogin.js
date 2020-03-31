import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

class FirstLogin extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      score: {
        right: 0,
        wrong: 0
      }
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleNewScore() {
    axios.post('/api/scores',
      this.state.score)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/login',
      this.state.data)
      .then(res => {
        const token = res.data.token
        auth.setToken(token)
        this.props.history.push('/quizzes')
      })
      .then(this.handleNewScore())
  }

  render() {
    return <>
      <h1>First Login</h1>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Email</label>
        <input onChange={(event) => this.handleChange(event)} type="text" name="email" />
        <label>Password</label>
        <input onChange={(event) => this.handleChange(event)} type="password" name="password" />
        <button>Login</button>
      </form>
    </>
  }
}

export default FirstLogin