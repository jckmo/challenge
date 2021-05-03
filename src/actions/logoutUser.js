import {BACKEND} from '../index'

const logoutUser = () => {
  return dispatch => {
    fetch(`${BACKEND}/sessions/${sessionStorage.userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(() => {
      sessionStorage.clear()
      dispatch({type: 'LOGOUT'})
    })
  }
}

export default logoutUser