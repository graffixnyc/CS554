import React, { useContext } from 'react';
import { AuthContext } from '../firebase/Auth.js';
import { doSignOut, doChangePassword } from '../firebase/FirebaseFunctions';

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
