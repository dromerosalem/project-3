import React from 'react'

const CommentForm = ( { handleSubmit, handleChange } ) => {
  
  return <form
    onSubmit={handleSubmit}>
    <input 
      onChange={handleChange}
      type="text"
    />
    <button>Submit</button>
  </form>
  
}

export default CommentForm