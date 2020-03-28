import React from 'react';
import firebaseApp from '../firebase/firebase';
import '../App.css';
import ChangePassword from './ChangePassword';
function Account() {
	return (
		<div>
			<h1>Account Page</h1>
			<ChangePassword />
		</div>
	);
}

export default Account;
