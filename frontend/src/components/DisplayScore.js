import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

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
    console.log(this.state)
  }

  render() {
    console.log(this.state)
    return <>
      <h1>{`Good game! Your score is ${localStorage.getItem('right')}/10! Nice!`}</h1>
    </>
  }

}

export default DisplayScore