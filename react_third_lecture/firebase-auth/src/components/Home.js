import React, { useContext } from 'react';
import { AuthContext } from '../firebase/Auth.js';
import { doSignOut, doChangePassword } from '../firebase/FirebaseFunctions';

import '../App.css';

function Home() {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	const changePassword = async (oldPassword, newPassword) => {
		try {
			await doChangePassword(currentUser.email, oldPassword, newPassword);
		} catch (e) {
			alert(e);
		}
	};
	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={() => doSignOut()}>Sign Out</button>
			<button
				onClick={() => {
					changePassword('test1234', 'aiden1234');
				}}
			>
				Sign Out
			</button>
		</div>
	);
}

export default Home;
