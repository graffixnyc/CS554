import React from 'react';
import { doSignOut } from '../firebase/FirebaseFunctions';

const SignOutButton = () => (
	<button type='button' onClick={doSignOut}>
		Sign Out
	</button>
);

export default SignOutButton;
