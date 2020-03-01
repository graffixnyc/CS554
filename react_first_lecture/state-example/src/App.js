import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
function App() {
	return (
		<div className='App'>
			<Clock date={new Date()} />
		</div>
	);
}

export default App;
