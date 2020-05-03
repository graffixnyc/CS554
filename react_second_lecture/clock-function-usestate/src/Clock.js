import React, { useState, useEffect } from 'react';
import './App.css';

function Clock(props) {
  const [clockData, setClock] = useState(props.date);
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    const tick = () => {
      setClock(new Date());
    };

    return () => {
      // Cleanup work goes in here
      clearInterval(timerID);
    };
  }, []);
  return (
    <div className="App">
      <h2>the current time is: {clockData.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
