import React, { useState, useMemo } from 'react';

import './App.css';

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
		console.log ("useMemo fired")
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>{counterOne}</div>
      <div>{isEven ? ' Even' : ' Odd'}</div>

      <button onClick={() => setCounterOne(counterOne + 1)}>
        Increment Counter One
      </button>

      <div>{counterTwo}</div>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        Increment Counter Two
      </button>
    </div>
  );
}

export default Counter;
