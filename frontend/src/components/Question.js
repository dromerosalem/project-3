import React from 'react'
import axios from 'axios'

const randomIndex = Math.floor(Math.random() * 4)
// console.log(randomIndex)

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}

let rightAnswers = 0
let wrongAnswers = 0

class Question extends React.Component {
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
    } else {
      event.target.style.backgroundColor = 'red'
      wrongAnswers++
    }
    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
      .then(res => this.setState({ wholeQuestion: res.data }))
    setTimeout(() => {
      event.target.style.backgroundColor = 'white'
    }, 400)
    if (rightAnswers + wrongAnswers === 10) {
      alert('Game finished!')
    }
  }

  render() {
    // console.log(rightAnswers)
    // console.log(wrongAnswers)
    const arrayOfAnswers = [this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[0])), this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[1])), this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[2]))]
    arrayOfAnswers.insert(randomIndex, this.state.wholeQuestion.results.map((e) => (e.correct_answer)))
    // console.log(arrayOfAnswers)
    return <>
      <h2>Category: {this.state.wholeQuestion.results.map((e) => (e.category))}</h2>
      <div>Question: {this.state.wholeQuestion.results.map((e) => (e.question))}</div>
      <div id="answera">A.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[0]}</button></div>
      <div id="answerb">B.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[1]}</button></div>
      <div id="answerc">C.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[2]}</button></div>
      <div id="answerd">D.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[3]}</button></div>
    </>
  }
}

export default Question

