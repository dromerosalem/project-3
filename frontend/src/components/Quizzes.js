import React from 'react'
import { Link } from 'react-router-dom'

const Quizzes = () => {
  return <div className="flex-container">
    <h2 className="choice-title">What kind of quiz would you like to play?</h2>
    <div className="quizz-choices">
      <button>
        <Link to={'/multiple-choice'}>Multiple Choice</Link>
      </button>
      <button>
        <Link to={'/true-or-false'}>True or False</Link>
      </button>
    </div>
  </div>
}

export default Quizzes