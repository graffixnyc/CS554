import React from 'react';
import './App.css';
import Child from './Child';
function App() {
	return (
		<div className='App'>
			<Child theme={{ color: 'green', fontWeight: 'bold' }} />
		</div>
	);
}
export default App;
