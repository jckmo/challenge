const appReducer = (state = {searchTitles: '', nominatedMovies: []}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchTitles: action.titles,
      }
    case 'NOMINATE':
      return {
        ...state,
        nominatedMovies: [
          ...state.nominatedMovies, 
          {
            title: action.title,
            nominated: true,
            timesNominated: 1
          }
        ]
      }
    default: 
      return state
    }
}

export default appReducer