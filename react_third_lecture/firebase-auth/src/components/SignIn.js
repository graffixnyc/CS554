import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../firebase/Auth.js';
import { doSignInWithEmailAndPassword, doSocialSignIn } from '../firebase/FirebaseFunctions';

const SignIn = ({ history }) => {
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
			<img onClick={() => socialSignOn('google')} alt='google signin' src='./imgs/btn_google_signin.png' />

			<img onClick={() => socialSignOn('facebook')} alt='facebook signin' src='./imgs/facebook_signin.png' />
		</div>
	);
};

export default withRouter(SignIn);
