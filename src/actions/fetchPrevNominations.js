import {BACKEND} from '../index.js'

const fetchPrevNominations = () => {
  return dispatch => {
    fetch(`${BACKEND}/titles`)
    .then(response => response.json())
    .then(jsonResponse => {
      const updateStateNominations = (title) => {
        dispatch({type: 'NOMINATE', title: title})
      }

      if (jsonResponse.length !== 0) {
        jsonResponse.map(title => updateStateNominations(title))
      }
    })
  }
}

export default fetchPrevNominations