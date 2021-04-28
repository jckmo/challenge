const appReducer = (state = {currentTitle: ''}, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        currentTitle: action.title
      }
  }
}

export default appReducer