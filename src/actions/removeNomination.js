import {BACKEND} from '../index.js'

const removeNomination = title => {
  return dispatch => {
    fetch(`${BACKEND}/titles/${sessionStorage.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        userId: sessionStorage.userId
      })
    })
    .then(() => {
      dispatch({type: 'REMOVE_NOMINATION', title: title})
    })
  }
}

export default removeNomination