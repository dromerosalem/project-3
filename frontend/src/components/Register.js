import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/register',
      this.state.data)
      .then(() => this.props.history.push('/login'))
  }

  render() {
    return <div className="flex-container">
      <h1>The Trivia game</h1>
      <h2>Register</h2>
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
      <h4>Already registered? Click   
        <Link to={'/login'}> here </Link> to login.
      </h4>
    </div>
  }
}

export default Register