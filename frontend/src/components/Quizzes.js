import React from 'react'
import { Link } from 'react-router-dom'

const Quizzes = () => {
  return <>
  <h1>Welcome! What type of quiz would you like to play?</h1>
  <Link to={'/multiple-choice'}>
    <button>Multiple Choice</button>
  </Link>
  <Link to={'/true-or-false'}>
    <button>True or False</button>
  </Link>
  </>
}

export default Quizzes