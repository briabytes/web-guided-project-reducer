import React, { useState, useReducer } from 'react';
import titleReducer from '../reducers/titleReducer';

const Title = () => {
  //const [title, setTitle] = useState('Hello earthlings!');
  //const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState('');

  const intitialState = {
    editing: false,
    title: 'Hello earthlings!'
  }

  const [state, dispatch] = useReducer(titleReducer, intitialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => setEditing(!editing)} className="far fa-edit" />
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
            onClick={() => {
              setTitle(newTitleText);
              setEditing(false);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;