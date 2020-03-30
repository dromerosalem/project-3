import React from 'react'

const DisplayScore = () => {
  return <>
  <h1>{`Good game! Your score is ${localStorage.getItem('score')}/10! Nice!`}</h1>
  </>
}

export default DisplayScore