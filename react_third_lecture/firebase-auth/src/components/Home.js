import React, { useContext } from 'react';
import { AuthContext } from '../firebase/Auth.js';
import firebaseApp from '../firebase/firebase';
import { doSignOut, doChangePassword } from '../firebase/FirebaseFunctions';

import '../App.css';

function Home() {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={() => doSignOut()}>Sign Out</button>
			<button onClick={() => doChangePassword(currentUser.email, 'boo1234', 'aiden123')}>Sign Out</button>
		</div>
	);
}

export default Home;
