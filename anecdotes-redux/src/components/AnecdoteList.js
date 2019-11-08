import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, hideMessage } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  
  const vote = (id) => {
    const voted = props.visibleAnecdotes.find(anec => anec.id === id)
    console.log('vote', id)
    props.voteAnecdote(id)
    props.setMessage('You voted "' + voted.content + '"')
    setTimeout(() => props.hideMessage(), 5000)
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
  const sortedAnec = anecdotes.sort(
    (a, b) => b.votes - a.votes)
  
  return sortedAnec.filter(anecdote => 
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
  setMessage,
  hideMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
