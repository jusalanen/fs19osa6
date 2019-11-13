import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  
  const vote = (id) => {
    const voted = props.visibleAnecdotes.find(anec => anec.id === id)
    console.log('vote', id)
    props.voteAnecdote(voted)
    props.setMessage(`You voted '${voted.content}'`, 5)
  }

  return (
  <div>
    {props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  const sortedAnecdotes = anecdotes.sort(
    (a, b) => b.votes - a.votes)
  
  return sortedAnecdotes.filter(anecdote => 
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
