import React from 'react';
import firebaseApp from '../firebase/firebase';
import '../App.css';

function Account() {
	return (
		<div>
			<h1>Account Page</h1>
			<button onClick={() => firebaseApp.auth().signOut()}>Sign Out</button>
		</div>
	);
}

export default Account;
