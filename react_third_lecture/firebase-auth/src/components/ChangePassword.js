import React, { useContext } from 'react';
import { AuthContext } from '../firebase/Auth.js';
import { doChangePassword } from '../firebase/FirebaseFunctions';

import '../App.css';

function ChangePassword() {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	const changePassword = async (oldPassword, newPassword) => {
		try {
			await doChangePassword(currentUser.email, oldPassword, newPassword);
		} catch (e) {
			alert(e);
		}
	};
	const submitForm = (e) => {
		e.preventDefault();
		let currentPassword = document.getElementById('currentPassword').value;
		let newPasswordOne = document.getElementById('newPasswordOne').value;
		let newPasswordTwo = document.getElementById('newPasswordTwo').value;
		alert(currentPassword);
		alert(newPasswordOne);
		changePassword(currentPassword, newPasswordOne);
	};
	return (
		<div>
			<h1>Sign up</h1>
			<form onSubmit={submitForm}>
				<label>
					Current Password
					<input name='currentPassword' id='currentPassword' type='password' placeholder='Current Password' />
				</label>
				<br />
				<label>
					New Password
					<input name='newPasswordOne' id='newPasswordOne' type='password' placeholder='Password' />
				</label>
				<br />
				<label>
					Confirm New Password
					<input name='newPasswordTwo' id='newPasswordTwo' type='password' placeholder='Confirm Password' />
				</label>
				<br />
				<button type='submit'>Change Password</button>
			</form>
			<br />
		</div>
	);
}

export default ChangePassword;
