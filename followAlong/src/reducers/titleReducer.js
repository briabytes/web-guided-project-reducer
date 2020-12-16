import {TOGGLE_EDITING, UPDATE_TITLE} from "../actions/titleActions";

const titleReducer = (state, action) => {
  // based on action.type, build & return a new state object
  // building a new object from scratch every time is the "immutable state" pattern
  switch(action.type) {
    case('TOGGLE_EDITING'):
      return {...state, editing: !state.editing};
    case('UPDATE_TITLE'):
      return {...state, editing: false, title: action.payload};
    default:
      return state;
  }
}

export default titleReducer;