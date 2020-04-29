import React from 'react';
import logo from './logo.svg';
import './App.css';

function PropsExample(props) {
	let h1 = null;

	if (props.greeting) {
		h1 = <h1>{props.greeting}</h1>;
	} else {
		h1 = <h1>Hello there!</h1>;
	}
	return (
		<div>
			{h1}
			<h2>{props.user.name}</h2>
			<button onClick={props.handleClick}>{props.user.username}</button>
		</div>
	);
}

export default PropsExample;

// import React, { Component } from 'react';
// import './App.css';

// class PropsExample extends Component {
// 	render() {
// 		let h1 = null;
// 		if (this.props.greeting) {
// 			h1 = <h1>{this.props.greeting}</h1>;
// 		} else {
// 			h1 = <h1>Hello There</h1>;
// 		}
// 		return (
// 			<div>
// 				{h1}
// 				<p>{this.props.user.name}</p>
// 				<button onClick={this.props.handleClick}>{this.props.user.username}</button>
// 			</div>
// 		);
// 	}
// }

// export default PropsExample;
