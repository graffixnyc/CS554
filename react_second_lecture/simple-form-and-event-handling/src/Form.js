import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Form() {
	const [ inputVal, setInputVal ] = useState('');
	const [ toggle, setToggle ] = useState(false);
	const [ postData, setPostData ] = useState({});
	const formSubmit = async (e) => {
		//disable form's default behavior
		e.preventDefault();
		//get references to form fields.
		let firstName = document.getElementById('firstName').value;
		let lastName = document.getElementById('lastName').value;

		//provide input checking/validation
		//then perhaps post form data to an API or your express server end point

		let user = {
			firstName,
			lastName
		};

		const { data } = await axios.post('http://localhost:3008/users', user, {
			headers: { Accept: 'application/json' }
		});
		console.log(data);
		setPostData(data);
		alert(JSON.stringify(user));
		document.getElementById('firstName').value = '';
		lastName = document.getElementById('lastName').value = '';
	};

	return (
		<div>
			<form id='simple-form' onSubmit={formSubmit}>
				<label>
					First Name:
					<input id='firstName' name='firstName' type='text' placeholder='First Name' />
				</label>
				<br />
				<label>
					Last Name:
					<input id='lastName' name='lastName' type='text' placeholder='Last Name' />
				</label>
				<br />

				<label>
					Change State:
					<input
						id='chngState'
						name='chngState'
						type='text'
						placeholder='Change State'
						onChange={(e) => setInputVal(e.target.value)}
					/>
				</label>
				<br />

				<br />
				<input type='submit' value='Submit' />
				<h3>{inputVal}</h3>
			</form>
			<button onClick={(e) => setToggle(!toggle)}>{toggle === true ? 'On' : 'Off'}</button>

			<dl>
				<dt>{postData._id}</dt>
				<dt>{postData.firstName}</dt>
				<dt>{postData.lastName}</dt>
			</dl>
		</div>
	);
}

export default Form;
