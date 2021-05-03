import {BACKEND} from '../index'

const login = (userName, password) => {
  return dispatch => {
    fetch(`${BACKEND}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          userName: userName,
          password: password
        }
      })    
    })
    .then(response => response.json())
    .then(jsonResponse => {
      sessionStorage.setItem('userId', jsonResponse.id)
      dispatch({type: 'LOGIN', currentUser: jsonResponse.id})
    })
  }
}

export default login