import API from '../index.js'

const exSearch = (desiredTitle) => {
  return (dispatch) => {
    fetch(`${API}&s=${desiredTitle}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response !== 'False' && desiredTitle !== '') {          
          let title = jsonResponse.Search[0].Title
          let year = jsonResponse.Search[0].Year
          dispatch({type: 'UPDATE_SEARCH', title: title, year: year})
        }
      })
  }
}

export default exSearch