const notificationReducer = (state = null, action) => { 
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    
    default:
      return state
  }
}

export const setMessage = (text) => {
  return {
    type: 'SET_NOTIFICATION',
    data: text
  }
}

export const hideMessage = () => {
  return {
    type: 'SET_NOTIFICATION',
    data: null
  }
}

export default notificationReducer  