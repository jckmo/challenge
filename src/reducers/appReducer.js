const appReducer = (state = {currentUser: '', searchTitles: '', nominatedTitles: []}, action) => {
  switch (action.type) {
    case 'LOGIN': 
      return {
        ...state,
        currentUser: action.currentUser
      }
    case 'LOGOUT':
      return {
        ...state,
        currentUser: ''
      }
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchTitles: action.titles,
      }
    case 'NOMINATE':
      return {
        ...state,
        nominatedTitles: [
          ...state.nominatedTitles,
          {
            title: action.title.title,
            year: action.title.year,
            poster: action.title.poster,
            nominated: true,
            timesNominated: action.title.nominations
          }
        ]
      }
    default: 
      return state
    }
}

export default appReducer