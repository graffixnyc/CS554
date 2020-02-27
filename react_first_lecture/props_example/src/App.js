import React from 'react';
import PropsExample from './PropsExample';
const App = () => {
	const greeting = 'Hello Function Component!';

	const handle_func = () => {
		console.log('Hello');
	};
	return (
		<PropsExample
			greeting={greeting}
			user={{ name: 'Patrick Hill', username: 'graffixnyc' }}
			handleChange={handle_func}
		/>
	);
};

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import PropsExample from './PropsExample';
// class App extends Component {
// 	render() {
// 		const greeting = 'Hello Function Component!';
// 		const handle_func = () => {
// 			console.log('Hello');
// 		};
// 		return (
// 			<PropsExample
// 				greeting={greeting}
// 				user={{ name: 'Patrick Hill', username: 'graffixnyc' }}
// 				handleChange={handle_func}
// 			/>
// 		);
// 	}
// }

// export default App;
