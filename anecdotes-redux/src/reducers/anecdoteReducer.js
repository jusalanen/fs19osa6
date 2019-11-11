import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const votedAnec = action.data
      const id = votedAnec.id
      return state.map(anec => anec.id !== id ? anec : votedAnec)

    case 'CREATE':
      return [...state, action.data]

    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }   
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const id = anecdote.id
    const voted = { ...anecdote, votes: anecdote.votes + 1 }
    const votedAnec = await anecdoteService.update(id, voted)
    console.log(votedAnec)
    dispatch({
      type: 'VOTE',
      data: votedAnec
    })
  }
}

export const newAnecdote = content => {
  return async dispatch => {
    const newAnec = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnec,
    })
    
  }
}

export default anecdoteReducer