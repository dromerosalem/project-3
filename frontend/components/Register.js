import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: {}
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    console.log(this.state.data)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/register',
      this.state.data)
      .then(() => this.props.history.push('/login'))
  }

  render() {
    return <>
      <h1>Register</h1>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Email</label>
        <input onChange={(event) => this.handleChange(event)} type="text" name="email" />
        <label>Username</label>
        <input onChange={(event) => this.handleChange(event)} type="text" name="username" />
        <label>Password</label>
        <input onChange={(event) => this.handleChange(event)} type="password" name="password" />
        <label>Confirm Password</label>
        <input
          onChange={(event) => this.handleChange(event)} type="password" name="passwordConfirmation" />
        <button>Register</button>
      </form>
    </>
  }
}

export default Register