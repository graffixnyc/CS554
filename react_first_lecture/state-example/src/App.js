import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}
	render() {
		return (
			<div>
				<Clock date={new Date()} />
			</div>
		);
	}
}

export default App;
