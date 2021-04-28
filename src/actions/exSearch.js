import API from '../index.js'

const exSearch = (desiredTitle) => {
  return (dispatch) => {
    fetch(`${API}&s=${desiredTitle}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response !== 'False' && desiredTitle !== '') {
          dispatch({type: 'UPDATE_SEARCH', titles: jsonResponse.Search})
        } else if (desiredTitle === '') {
          dispatch({type: 'UPDATE_SEARCH', titles: ''})
        }
      })
  }
}

export default exSearch