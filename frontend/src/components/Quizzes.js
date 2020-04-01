import React from 'react'
import { Link } from 'react-router-dom'

const Quizzes = () => {
  return <div className="flex-container">
    <h2 className="choice-title">What kind of quiz would you like to play?</h2>
    <div className="quizz-choices">
      <Link to={'/multiple-choice'}><button>Multiple Choice</button></Link>
      <Link to={'/true-or-false'}><button>True or False</button></Link>
    </div>
  </div>
}

export default Quizzes