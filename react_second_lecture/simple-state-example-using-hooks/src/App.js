import React, { useState } from 'react';

const App = (props) => {
	const [ count, setCount ] = useState(props.count);
	const [ text, setText ] = useState('');

	return (
		<div>
			<p>
				The current {text || 'count'} is: {count}
			</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => (count <= 0 ? setCount(0) : setCount(count - 1))}>Deincement</button>
			<button onClick={() => setCount(props.count)}>Reset</button>
			<br />
			<br />
			<label>
				Enter Text:
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</label>
		</div>
	);
};

App.defaultProps = { count: 0 };

export default App;
