import React from 'react'
import axios from 'axios'
import Spinner from './Spinner'

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}

let rightAnswers = 0
let wrongAnswers = 0
let totalAnswered = rightAnswers + wrongAnswers

class TrueOrFlase extends React.Component {
  constructor() {
    super()
    this.state = {
      wholeQuestion: {
        results: []
      }
    }
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=1&type=boolean')
      .then(res => this.setState({ wholeQuestion: res.data }))
  }

  handlePlayerClick(event) {
    if (event.target.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
      event.target.style.backgroundColor = 'green'
      rightAnswers++
      localStorage.setItem('right', rightAnswers)
      totalAnswered = rightAnswers + wrongAnswers
    } else {
      event.target.style.backgroundColor = 'red'
      wrongAnswers++
      localStorage.setItem('wrong', wrongAnswers)
      totalAnswered = rightAnswers + wrongAnswers
      if (this.AnswerA.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerA.style.backgroundColor = 'green'
      } else if (this.AnswerB.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerB.style.backgroundColor = 'green'
      }
    }

    if (totalAnswered === 10) {
      setTimeout(() => {
        this.props.history.push('/display-score')
      }, 400)
    } else {
      axios.get('https://opentdb.com/api.php?amount=1&type=boolean')
        .then(res => this.setState({ wholeQuestion: res.data }))
      setTimeout(() => {
        this.AnswerA.style.backgroundColor = 'buttonface'
        this.AnswerB.style.backgroundColor = 'buttonface'
      }, 400)
    }
  }

  render() {
    if (!this.state.wholeQuestion) return <Spinner />
    console.log(this.state.wholeQuestion)
    const randomIndex = Math.floor(Math.random() * 2)
    const arrayOfAnswers = [this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[0]))]
    arrayOfAnswers.insert(randomIndex, this.state.wholeQuestion.results.map((e) => (e.correct_answer)))
    let category = this.state.wholeQuestion.results.map((e) => (e.category))[0]
    let question = this.state.wholeQuestion.results.map((e) => (e.question))[0]
    if (category !== undefined) {
      category = category.replace(/Entertainment:/g, '').replace(/Science:/g, '')
    }
    if (question !== undefined) {
      question = question.replace(/&quot;/g, '"').replace(/&#039;/g, '\'').replace(/&minus;/g, '-').replace(/&ograve;/g, 'ò').replace(/&deg;/g, '°').replace(/&epsilon;/g, 'ε').replace(/&Phi;/g, 'Φ').replace(/&rsquo;/g, '\'').replace(/&amp;/g, '&').replace(/&eacute;/g, 'é').replace(/&atilde;/g, 'ã').replace(/&prime;/g, '\'').replace(/&Prime;/g, '"').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&Ouml;/g, 'Ö').replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"')
    }
    return <div className="flex-container">
      <h2>Category: {category}</h2>
      <div className="quizz">
        <div className="question">Question {totalAnswered + 1}: {question}</div>
        <button ref={button => {
          this.AnswerA = button
        }}
        onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[0]}</button>
        <button ref={button => {
          this.AnswerB = button
        }}
        onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[1]}</button>
      </div>
    </div>
  }
}

export default TrueOrFlase

