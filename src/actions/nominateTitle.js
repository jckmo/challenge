import {BACKEND} from '../index.js'

const nominateTitle = title => {
  return dispatch => {
    fetch(`${BACKEND}/titles`, {
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
      console.log(jsonResponse)
      dispatch({type: 'NOMINATE', title: jsonResponse})
    })
  }
}

export default nominateTitle