const appReducer = (state = {currentUser: '', currentUserTitles: [], searchTitles: '', allNominatedTitles: []}, action) => {
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
    case 'USER_TITLE':
      return {
        ...state,
        currentUserTitles: [
          ...state.currentUserTitles,
          {
            title: action.title.title,
          }
        ]
      }
    case 'NOMINATE':
      return {
        ...state,
        allNominatedTitles: [
          ...state.allNominatedTitles,
          {
            title: action.title.title.title,
            year: action.title.title.year,
            poster: action.title.title.poster,
            timesNominated: action.title.times_nominated,
          }
        ]
      }
    // eslint-disable-next-line
    default: 
      return state
    }
  }

export default appReducer