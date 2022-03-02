import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: this.props.date,
			counter: 0
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState((state, props) => ({
			date: new Date(),
			counter: state.counter + 1
		}));
	}
	render() {
		return (
			<div>
				<h2> It is: {this.state.date.toLocaleTimeString()}</h2>
				<h2> The tick function has fired: {this.state.counter} times</h2>
			</div>
		);
	}
}

export default Clock;
