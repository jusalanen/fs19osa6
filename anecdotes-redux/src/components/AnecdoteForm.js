import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content !== '') {
      event.target.anecdote.value = ''
      props.newAnecdote(content)
      props.setMessage(`You added '${content}'`, 5)
    }   
  }
  
  return (
  <div>
    <h3>create new</h3>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form><br></br>
  </div>
  )
}

const mapDispatchToProps = {
  newAnecdote,
  setMessage
}

export default connect(
  null,
  mapDispatchToProps
  )(AnecdoteForm)