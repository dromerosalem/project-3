import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/login',
      this.state.data)
      .then(res => {
        this.props.history.push('/quizzes')
      })
  }

  render() {
    return <>
      <h1>Welcome to the game etc...</h1>
      <h2>Login</h2>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Email</label>
        <input onChange={(event) => this.handleChange(event)} type="text" name="email" />
        <label>Password</label>
        <input onChange={(event) => this.handleChange(event)} type="password" name="password" />
        <button>Login</button>
      </form>
      <h2>Or if you don't have an account,
        <Link to={'/register'}>create one!</Link>
      </h2>
    </>
  }
}

export default Login