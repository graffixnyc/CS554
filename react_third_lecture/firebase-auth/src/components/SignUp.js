import React, { useCallback, useContext, useState } from 'react';
import SocialSignIn from './SocialSignIn';
import { withRouter, Redirect } from 'react-router';
import { doCreateUserWithEmailAndPassword } from '../firebase/FirebaseFunctions';
import { AuthContext } from '../firebase/Auth.js';
const SignUp = ({ history }) => {
	const { currentUser } = useContext(AuthContext);
	const [ pwMatch, setPwMatch ] = useState('');

	const handleSignUp = useCallback(
		async (e) => {
			e.preventDefault();
			const { displayName, email, passwordOne, passwordTwo } = e.target.elements;
			if (passwordOne.value !== passwordTwo.value) {
				setPwMatch('Passwords do not match');
				return false;
			}
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
			{pwMatch && <h4 className='error'>{pwMatch}</h4>}
			<form onSubmit={handleSignUp}>
				<div className='form-group'>
					<label>
						Name:
						<input className='form-control' required name='displayName' type='text' placeholder='Name' />
					</label>
				</div>
				<div className='form-group'>
					<label>
						Email:
						<input className='form-control' required name='email' type='email' placeholder='Email' />
					</label>
				</div>
				<div className='form-group'>
					<label>
						Password:
						<input
							className='form-control'
							id='passwordOne'
							name='passwordOne'
							type='password'
							placeholder='Password'
							required
						/>
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
							required
						/>
					</label>
				</div>
				<button id='submitButton' name='submitButton' type='submit'>
					Sign Up
				</button>
			</form>
			<br />
			<SocialSignIn />
		</div>
	);
};

export default withRouter(SignUp);
