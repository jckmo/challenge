import {BACKEND} from '../index.js'

const nominateTitle = title => {
  return dispatch => {
    fetch(`${BACKEND}/nominations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        userId: sessionStorage.userId
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {

      debugger
      dispatch({type: 'NOMINATE', title: jsonResponse})
    })
  }
}

export default nominateTitle