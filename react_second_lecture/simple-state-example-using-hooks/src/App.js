import React, { useState } from 'react';

const App = (props) => {
	const [ count, setCount ] = useState(0);
	const [ text, setText ] = useState('');

	return (
		<div>
			<p>
				The current {text || 'count'} is: {count}
			</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => (count <= 0 ? setCount(0) : setCount(count - 1))}>Decrement</button>
			<button onClick={() => setCount(0)}>Reset</button>
			<br />
			<br />
			<label>
				Enter Text:
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</label>
		</div>
	);
};

export default App;
