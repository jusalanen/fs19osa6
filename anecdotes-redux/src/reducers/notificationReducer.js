const notificationReducer = (state = null, action) => { 
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    
    default:
      return state
  }
}

export const setMessage = (text, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: text
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: null
      })     
    }, timeout * 1000)
  }
}

export default notificationReducer  