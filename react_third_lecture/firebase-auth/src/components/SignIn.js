import React, { useCallback, useContext } from 'react';
import SocialSignIn from './SocialSignIn';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../firebase/Auth.js';
import { doSignInWithEmailAndPassword } from '../firebase/FirebaseFunctions';

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

	return (
		<div>
			<h1>Log in</h1>
			<form onSubmit={handleLogin}>
				<label>
					Email
					<input name='email' type='email' placeholder='Email' />
				</label>
				<br />
				<label>
					Password
					<input name='password' type='password' placeholder='Password' />
				</label>
				<br />
				<button type='submit'>Log in</button>
			</form>
			<br />
			<SocialSignIn />
		</div>
	);
};

export default withRouter(SignIn);
