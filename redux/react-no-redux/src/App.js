import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  const [counter, setCouter] = useState(0);

  const setCounterState = (count) => {
    setCouter(count);
  };
  return (
    <div className="App">
      App Component: {counter}
      <br />
      <Counter setCounterState={setCounterState} />
    </div>
  );
}

export default App;
