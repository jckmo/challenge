import {BACKEND} from '../index.js'

const fetchPrevNominations = () => {
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
      console.log(jsonResponse)
      jsonResponse.nominated_titles.map(title => {
        dispatch({type: 'NOMINATE', title: title})
      })

      jsonResponse.current_user_nominations.map(title => {
        dispatch({type: 'USER_TITLE', title: title})
      })
    })
  }
}

export default fetchPrevNominations