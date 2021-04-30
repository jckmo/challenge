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