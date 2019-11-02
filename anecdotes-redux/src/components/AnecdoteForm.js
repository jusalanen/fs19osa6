import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, hideMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const store = props.store
  
  const addAnecdote = (event) => {
    event.preventDefault()
    console.log('create', event.target.anecdote.value)
    const content = event.target.anecdote.value
    if (content !== '') {
      store.dispatch(newAnecdote(content))
      event.target.anecdote.value = ''
      store.dispatch(setMessage('You added "'  + content + '"'))
      setTimeout(() => store.dispatch(hideMessage()), 5000)
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

export default AnecdoteForm