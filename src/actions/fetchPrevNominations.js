import {BACKEND} from '../index.js'

const fetchPrevNominations = () => {
  return dispatch => {
    fetch(`${BACKEND}/nominations/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 0
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'RESET_NOMINATED_TITLES', action: {}})
      // eslint-disable-next-line
      jsonResponse.map(title => {
        dispatch({type: 'NOMINATE', title: title})
      })
    })
  }
}

export default fetchPrevNominations