import React from 'react'
import axios from 'axios'

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
      <h1>Login</h1>
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

export default Login