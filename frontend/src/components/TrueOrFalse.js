import React from 'react'
import axios from 'axios'

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
      totalAnswered = rightAnswers + wrongAnswers
    } else {
      event.target.style.backgroundColor = 'red'
      wrongAnswers++
      totalAnswered = rightAnswers + wrongAnswers
      if (this.AnswerA.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerA.style.backgroundColor = 'green'
      } else if (this.AnswerB.innerHTML === this.state.wholeQuestion.results.map((e) => (e.correct_answer))[0]) {
        this.AnswerB.style.backgroundColor = 'green'
      }
    }
    
    if (totalAnswered === 10) {
      setTimeout(() => {
        alert('Game finished!')
        this.props.history.push('/display-score')
      }, 400)
    } else {
      axios.get('https://opentdb.com/api.php?amount=1&type=boolean')
        .then(res => this.setState({ wholeQuestion: res.data }))
      setTimeout(() => {
        this.AnswerA.style.backgroundColor = 'white'
        this.AnswerB.style.backgroundColor = 'white'
      }, 400)
    }
  }

  render() {
    console.log(rightAnswers)
    console.log(wrongAnswers)
    console.log(totalAnswered)
    const randomIndex = Math.floor(Math.random() * 2)
    const arrayOfAnswers = [this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[0]))]
    arrayOfAnswers.insert(randomIndex, this.state.wholeQuestion.results.map((e) => (e.correct_answer)))
    return <>
      <h2>Category: {this.state.wholeQuestion.results.map((e) => (e.category))}</h2>
      <div>Question: {this.state.wholeQuestion.results.map((e) => (e.question))}</div>
      <div>A.<button ref={button => {
        this.AnswerA = button
      }} 
      onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[0]}</button></div>
      <div>B.<button ref={button => {
        this.AnswerB = button
      }} 
      onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[1]}</button></div>
    </>
  }
}

export default TrueOrFlase