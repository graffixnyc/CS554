import React from 'react';
import SignOutButton from './SignOut';
import '../App.css';
import ChangePassword from './ChangePassword';
function Account() {
	return (
		<div>
			<h1>Account Page</h1>
			<ChangePassword />
			<SignOutButton />
		</div>
	);
}

export default Account;
