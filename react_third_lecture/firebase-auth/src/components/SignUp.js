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
				<div className='form-group'>
					<label>
						Name:
						<input className='form-control' name='displayName' type='text' placeholder='Name' />
					</label>
				</div>
				<div className='form-group'>
					<label>
						Email:
						<input className='form-control' name='email' type='email' placeholder='Email' />
					</label>
				</div>
				<div className='form-group'>
					<label>
						Password:
						<input className='form-control' name='passwordOne' type='password' placeholder='Password' />
					</label>
				</div>
				<div className='form-group'>
					<label>
						Confirm Password:
						<input
							className='form-control'
							name='passwordTwo'
							type='password'
							placeholder='Confirm Password'
						/>
					</label>
				</div>
				<button type='submit'>Sign Up</button>
			</form>
			<br />
			<SocialSignIn />
		</div>
	);
};

export default withRouter(SignUp);
