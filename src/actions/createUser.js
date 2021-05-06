import {BACKEND} from '../index.js'

const createUser = user => {
  return dispatch => {
    fetch(`${BACKEND}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: user.userName,
        password: user.password
      })    
    })
    .then(response => response.json())
    .then(jsonResponse => {
      sessionStorage.setItem('userId', jsonResponse)
      dispatch({type: 'LOGIN', currentUser: jsonResponse})
    })
  }
}

export default createUser