import React, { useContext, useCallback } from 'react';
import { AuthContext } from '../firebase/Auth.js';
import { doChangePassword } from '../firebase/FirebaseFunctions';
import { withRouter } from 'react-router';
import '../App.css';

function ChangePassword() {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);

	const submitForm = useCallback(
		async (e) => {
			//TODO, do PW checking, to make sure PW1 and PW2 match
			e.preventDefault();
			let currentPassword = document.getElementById('currentPassword').value;
			let newPasswordOne = document.getElementById('newPasswordOne').value;
			let newPasswordTwo = document.getElementById('newPasswordTwo').value;
			try {
				await doChangePassword(currentUser.email, currentPassword, newPasswordOne);
				alert('Password changed, the system will log you out now');
			} catch (e) {
				alert('Something went wrong, make sure your current password is correct');
			}
		},
		[ currentUser.email ]
	);
	if (currentUser.providerData[0].providerId === 'password') {
		return (
			<div>
				<h2>Change Password</h2>
				<form onSubmit={submitForm}>
					<label>
						Current Password
						<input
							name='currentPassword'
							id='currentPassword'
							type='password'
							placeholder='Current Password'
						/>
					</label>
					<br />
					<label>
						New Password
						<input name='newPasswordOne' id='newPasswordOne' type='password' placeholder='Password' />
					</label>
					<br />
					<label>
						Confirm New Password
						<input
							name='newPasswordTwo'
							id='newPasswordTwo'
							type='password'
							placeholder='Confirm Password'
						/>
					</label>
					<br />
					<button type='submit'>Change Password</button>
				</form>
				<br />
			</div>
		);
	} else {
		return (
			<div>
				<h2>You are signed in using a Social Media Provider, You cannot change your password</h2>
			</div>
		);
	}
}

export default withRouter(ChangePassword);
