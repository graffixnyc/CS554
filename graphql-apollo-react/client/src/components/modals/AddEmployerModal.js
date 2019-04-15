import React, { Component } from 'react';
//Import Query from react-apollo
import { Mutation } from 'react-apollo';
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
class AddEmployerModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddModal: this.props.isOpen
		};
		this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
		this.handleCloseAddModal = this.handleCloseAddModal.bind(this);
	}

	handleOpenAddModal() {
		this.setState({ showAddModal: true });
	}

	handleCloseAddModal() {
		this.setState({ showAddModal: false });
		this.props.handleClose(false);
	}
	render() {
		let name;
		return (
			<div>
				{/*Add Employee Modal */}
				<ReactModal
					name='addModal'
					isOpen={this.state.showAddModal}
					contentLabel='Add Employee'
					style={customStyles}
				>
					{/*Here we set up the mutation, since I want the data on the page to update
						after I have added someone, I need to update the cache. If not then
						I need to refresh the page to see the data updated 

						See: https://www.apollographql.com/docs/react/essentials/mutations for more
						information on Mutations
					*/}
					<Mutation
						mutation={queries.ADD_EMPLOYER}
						update={(cache, { data: { addEmployer } }) => {
							const { employers } = cache.readQuery({ query: queries.GET_EMPLOYERS_WITH_EMPLOYEES });
							cache.writeQuery({
								query: queries.GET_EMPLOYERS_WITH_EMPLOYEES,
								data: { employers: employers.concat([ addEmployer ]) }
							});
						}}
					>
						{(addEmployer, { data }) => (
							<form
								className='form'
								id='add-employer'
								onSubmit={(e) => {
									e.preventDefault();
									addEmployer({
										variables: {
											name: name.value
										}
									});
									name.value = '';
									this.setState({ showAddModal: false });
									alert('Employer Added');
									this.props.handleClose();
								}}
							>
								<div className='form-group'>
									<label>
										Employer Name:
										<br />
										<input
											ref={(node) => {
												name = node;
											}}
											required
										/>
									</label>
								</div>
								<br />

								<br />
								<br />
								<button className='button add-button' type='submit'>
									Add Employer
								</button>
							</form>
						)}
					</Mutation>
					<br />
					<br />
					<button className='button cancel-button' onClick={this.handleCloseAddModal}>
						Cancel
					</button>
				</ReactModal>
			</div>
		);
	}
}

export default AddEmployerModal;
