import React, { useCallback, useContext } from 'react';
import SocialSignIn from './SocialSignIn';
import { withRouter, Redirect } from 'react-router';
import { doCreateUserWithEmailAndPassword } from '../firebase/FirebaseFunctions';
import { AuthContext } from '../firebase/Auth.js';
const SignUp = ({ history }) => {
	const { currentUser } = useContext(AuthContext);
	const handleSignUp = useCallback(
		async (event) => {
			//TODO, do PW checking, to make sure PW1 and PW2 match
			event.preventDefault();
			const { displayName, email, passwordOne } = event.target.elements;
			try {
				await doCreateUserWithEmailAndPassword(email.value, passwordOne.value, displayName.value);
				history.push('/home');
			} catch (error) {
				alert(error);
			}
		},
		[ history ]
	);

	if (currentUser) {
		return <Redirect to='/home' />;
	}

	return (
		<div>
			<h1>Sign up</h1>
			<form onSubmit={handleSignUp}>
				<label>
					Name
					<input name='displayName' type='text' placeholder='Name' />
				</label>
				<br />
				<label>
					Email
					<input name='email' type='email' placeholder='Email' />
				</label>
				<br />
				<label>
					Password
					<input name='passwordOne' type='password' placeholder='Password' />
				</label>
				<br />
				<label>
					Confirm Password
					<input name='passwordTwo' type='password' placeholder='Confirm Password' />
				</label>
				<br />
				<button type='submit'>Sign Up</button>
			</form>
			<br />
			<SocialSignIn />
		</div>
	);
};

export default withRouter(SignUp);
