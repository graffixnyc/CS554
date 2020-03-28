import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { doCreateUserWithEmailAndPassword, doSocialSignIn } from '../firebase/FirebaseFunctions';

const SignUp = ({ history }) => {
	const socialSignOn = async (provider) => {
		try {
			await doSocialSignIn(provider);
			history.push('/home');
		} catch (error) {
			// Handle Errors here.
			// var errorCode = error.code;
			// var errorMessage = error.message;
			// The email of the user's account used.
			//var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			//var credential = error.credential;
			console.log(error);
		}
	};
	const handleSignUp = useCallback(
		async (event) => {
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
			<img onClick={() => socialSignOn('google')} alt='google signin' src='./imgs/btn_google_signin.png' />

			<img onClick={() => socialSignOn('facebook')} alt='facebook signin' src='./imgs/facebook_signin.png' />
		</div>
	);
};

export default withRouter(SignUp);
