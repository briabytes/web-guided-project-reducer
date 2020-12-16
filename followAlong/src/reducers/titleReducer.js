

const titleReducer = (state, action) => {
  // based on action.type, build & return a new state object
  // building a new object from scratch every time is the "immutable state" pattern
  switch(action.type) {
    case('TOGGLE_EDITING'):
      return {...state};
    case('UPDATE_TITLE'):
      return {...state};
    default:
      return state;
  }
}