const appReducer = (state = {searchTitles: '', nominatedTitles: []}, action) => {
  switch (action.type) {
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
            title: action.title.Title,
            year: action.title.Year,
            poster: action.title.Poster,
            nominated: true,
            timesNominated: 1
          }
        ]
      }
    case 'ADD_NOMINATION':
      // let movieToBeUpdated = state.nominatedMovies.find(title => title.title === action.title)
      // find title and add 1 nomination to it
      console.log(action)
    // eslint-disable-next-line 
    default: 
      return state
    }
}

export default appReducer