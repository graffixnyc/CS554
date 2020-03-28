import React, { useCallback, useContext } from 'react';
import SocialSignIn from './SocialSignIn';
import { withRouter, Redirect } from 'react-router';
import '../App.css';
import { AuthContext } from '../firebase/Auth.js';
import { doSignInWithEmailAndPassword, doPasswordReset } from '../firebase/FirebaseFunctions';

const SignIn = ({ history }) => {
	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await doSignInWithEmailAndPassword(email.value, password.value);
				history.push('/home');
			} catch (error) {
				alert(error);
			}
		},
		[ history ]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to='/home' />;
	}
	const passwordReset = (e) => {
		e.preventDefault();

		let email = document.getElementById('email').value;

		if (email) {
			doPasswordReset(email);
			alert('Password Reset Email sent!');
		} else {
			alert('Please enter an email address below and click forgot password');
		}
	};
	return (
		<div>
			<h1>Log in</h1>
			<form onSubmit={handleLogin}>
				<div className='form-group'>
					<label>
						Email:
						<input className='form-control' name='email' id='email' type='email' placeholder='Email' />
					</label>
				</div>
				<div className='form-group'>
					<label>
						Password:
						<input className='form-control' name='password' type='password' placeholder='Password' />
					</label>
				</div>
				<button type='submit'>Log in</button>

				<button className='forgotPassword' onClick={passwordReset}>
					Forgot Password
				</button>
			</form>

			<br />
			<SocialSignIn />
		</div>
	);
};

export default withRouter(SignIn);
