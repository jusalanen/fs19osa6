import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, hideMessage } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  /*const store = props.store
  /*const filter = store.getState().filter*/
  
  const anecdotes = props.anecdotes.sort(
    (a, b) => b.votes - a.votes)
  
  const filteredAnecdotes = (anecdotes, filter) => {
    return anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  }

  const vote = (id) => {
    const voted = props.anecdotes.find(anec => anec.id === id)
    console.log('vote', id)
    props.voteAnecdote(id)
    props.setMessage('You voted "' + voted.content + '"')
    setTimeout(() => props.hideMessage(), 5000)
  }

  return (
  <div>
    {filteredAnecdotes(anecdotes, props.filter).map(anecdote =>
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setMessage,
  hideMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
