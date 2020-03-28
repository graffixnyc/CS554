import React from 'react';
import { withRouter } from 'react-router';

import { doSocialSignIn } from '../firebase/FirebaseFunctions';

const SocialSignIn = ({ history }) => {
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
			alert(error);
		}
	};

	return (
		<div>
			<img onClick={() => socialSignOn('google')} alt='google signin' src='./imgs/btn_google_signin.png' />

			<img onClick={() => socialSignOn('facebook')} alt='facebook signin' src='./imgs/facebook_signin.png' />
		</div>
	);
};

export default withRouter(SocialSignIn);
