/* eslint-disable max-len */
import React, { useState } from 'react';

const useRecord = (init) => {
  const [undo, setUndo] = useState('');
  const [redo, setRedo] = useState('');
  const [current, setCurrent] = useState([]);
  const [record, setRecord] = useState([]);

  return {
    undo,
    setUndo,
    redo,
    setRedo,
    current,
    setCurrent,
    record,
    setRecord,
  };
};

function App() {
  const { current, undo, redo, record } = useRecord('#FF0000');

  // const handleChange = ({ target }) => {
  //   record: target.value
  // }

  const handleClick = ({ target }) => {
    [target.name] = target.value;
  };

  return (
    <>
      <button name="undo" onClick={handleClick}>
        undo
      </button>
      <button name="redo" onClick={handleClick}>
        redo
      </button>
      <input
        type="color"
        value={current}
        name="current"
        onChange={({ target }) => record(target.value)}
      />
      <div
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
