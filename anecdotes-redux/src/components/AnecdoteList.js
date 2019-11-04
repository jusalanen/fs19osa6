import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, hideMessage } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const store = props.store
  const filter = store.getState().filter
  
  const anecdotes = store.getState().anecdotes
  .sort((a, b) => b.votes - a.votes)
  
  const filteredAnecdotes = (anecdotes, filter) => {
    return anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
  }

  const vote = (id) => {
    const voted = store.getState().anecdotes.find(anec => anec.id === id)
    console.log('vote', id)
    store.dispatch(voteAnecdote(id))
    store.dispatch(setMessage('You voted "' + voted.content + '"'))
    setTimeout(() => store.dispatch(hideMessage()), 5000)
  }

  return (
  <div>
    {filteredAnecdotes(anecdotes, filter).map(anecdote =>
      <div key={anecdote.id}>
        <div>
            {anecdote.content}
        </div>
        <div>
          has {anecdote.votes} <button onClick={() =>
            vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}   
  </div>
  )
}

export default AnecdoteList