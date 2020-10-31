import React from 'react';
import './App.css';
import ChildChild from './ChildChild';
function Child(props) {
  return (
    <div className="App">
      <p style={props.theme}>I'm the Child</p>
      <ChildChild theme={props.theme} />
    </div>
  );
}
export default Child;
