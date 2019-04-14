import React, { Component } from 'react';
//Import Query from react-apollo
import { Query, Mutation } from 'react-apollo';
import ReactModal from 'react-modal';

//Import the file where my query constants are defined
import queries from '../../queries';

//For react-modal
ReactModal.setAppElement('#root');
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '50%',
		border: '1px solid #28547a',
		borderRadius: '4px'
	}
};

/* The React Apollo package grants access to a Query component, which takes a query as prop and executes it when its rendered. 
That’s the important part: it executes the query when it is rendered. 
It uses React’s render props pattern, using a child as a function implementation where you can access the result of the query as an argument.
*/
class EditEmployeesModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showEditModal: this.props.isOpen
		};
		this.handleCloseEditModal = this.handleCloseEditModal.bind(this);
	}

	handleCloseEditModal() {
		this.setState({ showEditModal: false });
		this.props.handleClose();
	}

	render() {
		return (
			<div>
				{/*Edit Employee Modal - NOT DONE YET */}
				<ReactModal
					name='editModal'
					isOpen={this.state.showEditModal}
					contentLabel='Edit Employee'
					style={customStyles}
				>
					<p>TODO - </p>
					<button className='button' onClick={this.handleCloseEditModal}>
						Close Modal
					</button>
				</ReactModal>
			</div>
		);
	}
}

export default EditEmployeesModal;
