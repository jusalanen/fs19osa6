import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const voted = state.find(anec => anec.id === id)
      const votedAnec = { ...voted, votes: voted.votes + 1 }
      
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

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id } 
  }
}

export const newAnecdote = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

export default anecdoteReducer