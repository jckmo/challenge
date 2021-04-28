const appReducer = (state = {searchTitles: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchTitles: action.titles,
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