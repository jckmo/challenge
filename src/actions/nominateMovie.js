const nominateMovie = (title, year) => {
  return dispatch => {
    dispatch({type: 'NOMINATE', title: title})
  }
}

export default nominateMovie