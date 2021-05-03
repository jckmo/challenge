import {BACKEND} from '../index'

const logoutUser = () => {
  return dispatch => {
    fetch(`${BACKEND}/sessions/${sessionStorage.userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(jsonResponse => {
      sessionStorage.clear()
    })

  }
}

export default logoutUser