import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Counter(props) {
  const [counter, setCouter] = useState(0);

  useEffect(() => {
    props.setCounterState(counter);
  }, [props, counter]);

  const incCounter = () => {
    setCouter(counter + 1);
  };

  const decCounter = () => {
    setCouter(counter - 1);
  };
  return (
    <div className="App">
      Counter Component: {counter}
      <br />
      <button onClick={incCounter}>+1</button>
      <br />
      <button onClick={decCounter}>-1</button>
    </div>
  );
}

export default Counter;
