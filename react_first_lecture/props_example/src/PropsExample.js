import React from 'react';
const PropsExample = (props) => {
	let h1 = null;
	if (props.greeting) {
		h1 = <h1>{props.greeting}</h1>;
	} else {
		h1 = <h1>Hello There</h1>;
	}
	return (
		<div>
			{h1}
			<p>{props.user.name}</p>
			<button onClick={props.handleChange}>{props.user.username}</button>
		</div>
	);
};
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
// 				<button onClick={this.props.handleChange}>{this.props.user.username}</button>
// 			</div>
// 		);
// 	}
// }

// export default PropsExample;
