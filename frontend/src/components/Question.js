import React from 'react'
import axios from 'axios'

const randomIndex = Math.floor(Math.random() * 4)
console.log(randomIndex)

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item)
}

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
    } else {
      event.target.style.backgroundColor = 'red'
    }
    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
      .then(res => this.setState({ wholeQuestion: res.data }))
    setTimeout(() => {
      event.target.style.backgroundColor = 'white'
    }, 400)
  }

  render() {
    const arrayOfAnswers = [this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[0])), this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[1])), this.state.wholeQuestion.results.map((e) => (e.incorrect_answers[2]))]
    arrayOfAnswers.insert(randomIndex, this.state.wholeQuestion.results.map((e) => (e.correct_answer)))
    console.log(arrayOfAnswers)
    return <>
      <h2>Category: {this.state.wholeQuestion.results.map((e) => (e.category))}</h2>
      <div>Question: {this.state.wholeQuestion.results.map((e) => (e.question))}</div>
      <div>A.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[0]}</button></div>
      <div>B.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[1]}</button></div>
      <div>C.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[2]}</button></div>
      <div>D.<button onClick={() => this.handlePlayerClick(event)}>{arrayOfAnswers[3]}</button></div>
    </>
  }
}

export default Question