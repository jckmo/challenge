const appReducer = (state = {searchTitle: '', searchYear: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchTitle: action.title,
        searchYear: action.year,
      }
    // case 'RESET_SEARCH':
    //   return {
    //     ...state,
    //     searchTitle: '',
    //     searchYear: ''
    //   }
    default: 
      return state
    }
}

export default appReducer