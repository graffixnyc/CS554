import React, { useContext, useCallback, useState } from 'react';
import { AuthContext } from '../firebase/Auth.js';
import { doChangePassword } from '../firebase/FirebaseFunctions';
import { withRouter } from 'react-router';
import '../App.css';

function ChangePassword() {
	const { currentUser } = useContext(AuthContext);
	const [ pwMatch, setPwMatch ] = useState('');

	const submitForm = useCallback(
		async (e) => {
			e.preventDefault();
			let currentPassword = document.getElementById('currentPassword').value;
			let newPasswordOne = document.getElementById('newPasswordOne').value;
			let newPasswordTwo = document.getElementById('newPasswordTwo').value;
			if (newPasswordOne !== newPasswordTwo) {
				setPwMatch('Passwords do not match');
				return false;
			}

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
				{pwMatch && <h4 className='error'>{pwMatch}</h4>}
				<h2>Change Password</h2>
				<form onSubmit={submitForm}>
					<div className='form-group'>
						<label>
							Current Password:
							<input
								className='form-control'
								name='currentPassword'
								id='currentPassword'
								type='password'
								placeholder='Current Password'
								required
							/>
						</label>
					</div>

					<div className='form-group'>
						<label>
							New Password:
							<input
								className='form-control'
								name='newPasswordOne'
								id='newPasswordOne'
								type='password'
								placeholder='Password'
								required
							/>
						</label>
					</div>
					<div className='form-group'>
						<label>
							Confirm New Password:
							<input
								className='form-control'
								name='newPasswordTwo'
								id='newPasswordTwo'
								type='password'
								placeholder='Confirm Password'
								required
							/>
						</label>
					</div>

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
