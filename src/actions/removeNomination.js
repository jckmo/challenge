import {BACKEND} from '../index.js'

const removeNomination = title => {
  return dispatch => {
    fetch(`${BACKEND}/nominations/1`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        userId: sessionStorage.userId
      })
    })
  }
}

export default removeNomination