import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
	const [ username, setUserName ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	const updateUsername = useCallback(
		() => {
			setUserName('graffixnyc');
		},
		[ setUserName ]
	);

	const updateFirstName = useCallback(
		() => {
			setFirstName('Patrick');
		},
		[ setFirstName ]
	);

	const updateLastName = useCallback(
		() => {
			setLastName('Hill');
		},
		[ setLastName ]
	);

	return (
		<div className='App'>
			<div>
				{username}
				<br />
				{firstName}
				<br />
				{lastName}
				<br />
			</div>
			<button onClick={updateUsername}>Set Username</button>
			<button onClick={updateFirstName}>Set First Name</button>
			<button onClick={updateLastName}>Set Last Name</button>
		</div>
	);
}

export default App;
