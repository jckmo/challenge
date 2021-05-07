import {BACKEND} from '../index.js'

const nominateTitle = (title, source) => {
  return dispatch => {
    fetch(`${BACKEND}/nominations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        userId: sessionStorage.userId,
        source: source
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'NOMINATE', title: jsonResponse})
    })
  }
}

export default nominateTitle