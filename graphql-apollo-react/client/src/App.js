import React, { Component } from 'react';

import Employees from './Employees';
import Employers from './Employers';

class App extends Component {
	render() {
		return (
			<div>
				<Employees />
				<hr />
				<h1>Employers</h1>
				<Employers />
			</div>
		);
	}
}

export default App;
