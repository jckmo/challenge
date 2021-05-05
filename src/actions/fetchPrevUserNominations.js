import {BACKEND} from '../index.js'

const fetchPrevUserNominations = () => {
  return dispatch => {
    fetch(`${BACKEND}/nominations/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: sessionStorage.userId
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      // eslint-disable-next-line
      jsonResponse.map(title => {
        dispatch({type: 'USER_TITLE', title: title})
      })
    })
  }
}

export default fetchPrevUserNominations