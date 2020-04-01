import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'
import { Link } from 'react-router-dom'

class DisplayScore extends React.Component {

  constructor() {
    super()
    this.state = {
      score: {
        right: parseInt(localStorage.getItem('right')),
        wrong: parseInt(localStorage.getItem('wrong'))
      }
    }
  }

  componentDidMount() {
    const id = auth.getUserId()
    axios.put(`/api/user/${id}`,
      this.state,
      { headers: { Authorization: `Bearer ${auth.getToken()}` } })
  }

  render() {
    return <div className="flex-container">
      <h1>Your score</h1>
      <div className="score">
        <h2 className="score-title">{`You guessed ${localStorage.getItem('right')} out of 10!`}</h2>
        <Link to="/quizzes"><button>Play again</button></Link>
        <Link to="/profile"><button>See profile</button></Link>
      </div>
    </div>
  }

}

export default DisplayScore