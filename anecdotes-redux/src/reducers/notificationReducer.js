const notificationReducer = (state = 'render here notification...', action) => { 
  switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      default:
        return state
    }
  }

export default notificationReducer  