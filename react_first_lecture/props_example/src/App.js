import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropsExample from './PropsExample';

function App() {
	const greeting = 'Hello Function Component!';

	const handle_func = () => {
		console.log('Hello from within handle_func in app.js');
	};
	return (
		<div className='App'>
			<PropsExample user={{ name: 'Patrick Hill', username: 'graffixnyc' }} handleClick={handle_func} />
		</div>
	);
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import PropsExample from './PropsExample';
// class App extends Component {
// 	render() {
// 		const greeting = 'Hello Function Component!';
// 		const handle_func = () => {
// 			console.log('Hello, From the function in app.js');
// 		};
// 		return (
// 			<PropsExample
// 				greeting={greeting}
// 				user={{ name: 'Patrick Hill', username: 'graffixnyc' }}
// 				handleClick={handle_func}
// 			/>
// 		);
// 	}
// }

// export default App;
