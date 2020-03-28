import React from 'react';
import { doSignOut } from '../firebase/FirebaseFunctions';

import '../App.css';

function Home() {
	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={() => doSignOut()}>Sign Out</button>
		</div>
	);
}

export default Home;
