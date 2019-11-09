import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, hideMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content !== '') {
      event.target.anecdote.value = ''
      const created = await anecdoteService.createNew(content)
      props.newAnecdote(created)
      props.setMessage('You added "' + content + '"')
      setTimeout(() => props.hideMessage(), 5000)
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
  setMessage,
  hideMessage
}

export default connect(
  null,
  mapDispatchToProps
  )(AnecdoteForm)