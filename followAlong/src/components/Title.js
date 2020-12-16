import React, { useState, useReducer } from 'react';
import titleReducer from '../reducers/titleReducer';
import actions from "../actions/titleActions"

const Title = () => {
  //const [title, setTitle] = useState('Hello earthlings!');
  //const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState('');

  const initialState = {
    editing: false,
    title: 'Hello from the reducer!'
  }

  const [state, dispatch] = useReducer(titleReducer, initialState);
  // kind of like: [value, setValue] = useState(initialValue);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(actions.toggleEditing())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => dispatch(actions.updateTitle(newTitleText))}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;