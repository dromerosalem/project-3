import React from 'react'

class DisplayScore extends React.Component {

  constructor() {
    super()
    this.state = {
      right: '',
      wrong: '',
      total: ''
    }
  }

  render() {
    return <>
      <h1>{`Good game! Your score is ${localStorage.getItem('right')}/10! Nice!`}</h1>
    </>
  }

}

export default DisplayScore