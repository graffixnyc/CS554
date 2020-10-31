import React from 'react';
import './App.css';

function ChildChild(props) {
  return (
    <div className="App">
      <p style={props.theme}>I'm the Child's Child</p>
    </div>
  );
}
export default ChildChild;
