import {BACKEND} from '../index.js'

const removeNomination = (title, source) => {
  return dispatch => {
    fetch(`${BACKEND}/nominations/1`, {
      method: 'DELETE',
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
      dispatch({type: 'RESET_ALL', action: {}})
      // eslint-disable-next-line
      jsonResponse.current_user_nominations.map(title => {
        dispatch({type: 'USER_TITLE', title: title})
      })
      // eslint-disable-next-line
      jsonResponse.nominated_titles.map(title => {
        dispatch({type: 'NOMINATE', title: title})
      })
    })
  }
}

export default removeNomination