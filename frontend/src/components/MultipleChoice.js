import React from 'react'
import axios from 'axios'

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}

let rightAnswers = 0
let wrongAnswers = 0
let totalAnswered = rightAnswers + wrongAnswers

class MultipleChoice extends React.Component {
  constructor() {
    super()
    this.state = {
      wholeQuestion: {
        results: []
      }
    }
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
      .then(res => this.setState({ wholeQuestion: res.data }))
  }

  handlePlayerClick(event) {

    if (event.target.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
      event.target.style.backgroundColor = 'green'
      rightAnswers++
      localStorage.setItem('score', rightAnswers)
      totalAnswered = rightAnswers + wrongAnswers
    } else {
      event.target.style.backgroundColor = 'red'
      wrongAnswers++
      totalAnswered = rightAnswers + wrongAnswers
      if (this.AnswerA.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerA.style.backgroundColor = 'green'
      } else if (this.AnswerB.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerB.style.backgroundColor = 'green'
      } else if (this.AnswerC.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerC.style.backgroundColor = 'green'
      } else if (this.AnswerD.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerD.style.backgroundColor = 'green'
      }
    }

    if (totalAnswered === 10) {
      axios.put()
      setTimeout(() => {
        alert('Game finished!')
        this.props.history.push('/display-score')
        rightAnswers = 0
        wrongAnswers = 0
        totalAnswered = 0
      }, 400)
    } else {
      axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(res => this.setState({ wholeQuestion: res.data }))
      setTimeout(() => {
        this.AnswerA.style.backgroundColor = 'white'
        this.AnswerB.style.backgroundColor = 'white'
        this.AnswerC.style.backgroundColor = 'white'
        this.AnswerD.style.backgroundColor = 'white'
      }, 400)
    }
  }

  render() {
    console.log(rightAnswers)
    console.log(wrongAnswers)
    console.log(totalAnswered)
    const { results } = this.state.wholeQuestion
    const randomIndex = Math.floor(Math.random() * 4)
    const arrayOfAnswers = [results.map((e) => (e.incorrect_answers[0])), results.map((e) => (e.incorrect_answers[1])), results.map((e) => (e.incorrect_answers[2]))]
    arrayOfAnswers.insert(randomIndex, results.map((e) => (e.correct_answer)))
    const question = results.map((e) => (e.question))[0]
    console.log(typeof question)
    return <>
      <h2>Category: {results.map((e) => (e.category))}</h2>
      <div>Question: {question}</div>
      <div>A.<button ref={button => {
        this.AnswerA = button
      }}
      onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[0]}</button></div>
      <div>B.<button ref={button => {
        this.AnswerB = button
      }}
      onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[1]}</button></div>
      <div>C.<button ref={button => {
        this.AnswerC = button
      }}
      onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[2]}</button></div>
      <div>D.<button ref={button => {
        this.AnswerD = button
      }}
      onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[3]}</button></div>
    </>
  }
}

export default MultipleChoice