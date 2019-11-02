import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const store = props.store
  
  const addAnecdote = (event) => {
    event.preventDefault()
    console.log('create', event.target.anecdote.value)
    const content = event.target.anecdote.value
    store.dispatch(newAnecdote(content))
  }
  
  return (
  <div>
    <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form><br></br>
  </div>
  )
}

export default AnecdoteForm