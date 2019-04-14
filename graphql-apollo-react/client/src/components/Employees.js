import React, { Component } from 'react';
//Import Query from react-apollo
import { Query, Mutation } from 'react-apollo';
import ReactModal from 'react-modal';

//Import the file where my query constants are defined
import queries from '../queries';

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
		width: '50%'
	}
};

/* The React Apollo package grants access to a Query component, which takes a query as prop and executes it when its rendered. 
That’s the important part: it executes the query when it is rendered. 
It uses React’s render props pattern, using a child as a function implementation where you can access the result of the query as an argument.
*/
class Employees extends Component {
	constructor() {
		super();
		this.state = {
			showEditModal: false,
			showAddModal: false
		};
		this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
		this.handleCloseEditModal = this.handleCloseEditModal.bind(this);
		this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
		this.handleCloseAddModal = this.handleCloseAddModal.bind(this);
		this.submitAddForm = this.submitAddForm.bind(this);
	}
	handleOpenEditModal() {
		this.setState({ showEditModal: true });
	}

	handleCloseEditModal() {
		this.setState({ showEditModal: false });
	}
	handleOpenAddModal() {
		this.setState({ showAddModal: true });
	}

	handleCloseAddModal() {
		this.setState({ showAddModal: false });
	}
	submitAddForm(e) {
		e.preventDefault();
		alert('Submit');
		this.setState({ showAddModal: false });
	}
	render() {
		let firstName;
		let lastName;
		let employerId;
		return (
			<div>
				<button className='button' onClick={this.handleOpenAddModal}>
					Create Employee
				</button>
				<br />
				<br />
				<Query query={queries.GET_EMPLOYEES}>
					{({ data }) => {
						const { employees } = data;
						if (!employees) {
							return null;
						}
						return (
							<div>
								<ul>
									{employees.map((employee) => {
										return (
											<li key={employee.id}>
												{employee.firstName} {employee.lastName}
												<br />
												Employer: {employee.employer.name}
												<br />
												<button className='button' onClick={this.handleOpenEditModal}>
													Edit
												</button>{' '}
												<button className='button'>Delete</button>
												<br />
											</li>
										);
									})}
								</ul>
							</div>
						);
					}}
				</Query>

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
						mutation={queries.ADD_EMPLOYEE}
						update={(cache, { data: { addEmployee } }) => {
							const { employees } = cache.readQuery({ query: queries.GET_EMPLOYEES });
							cache.writeQuery({
								query: queries.GET_EMPLOYEES,
								data: { employees: employees.concat([ addEmployee ]) }
							});
						}}
					>
						{(addEmployee, { data }) => (
							<form
								className='form'
								id='add-employee'
								onSubmit={(e) => {
									e.preventDefault();
									addEmployee({
										variables: {
											firstName: firstName.value,
											lastName: lastName.value,
											employerId: parseInt(employerId.value)
										}
									});
									firstName.value = '';
									lastName.value = '';
									employerId.value = '1';
									this.setState({ showAddModal: false });
									alert('Employee Added');
								}}
							>
								<div className='form-group'>
									<label>
										First Name:
										<br />
										<input
											ref={(node) => {
												firstName = node;
											}}
											required
										/>
									</label>
								</div>
								<br />
								<div className='form-group'>
									<label>
										Last Name:
										<br />
										<input
											ref={(node) => {
												lastName = node;
											}}
											required
										/>
									</label>
								</div>
								<br />

								<Query query={queries.GET_EMPLOYERS_NAME_LIST}>
									{({ data }) => {
										const { employers } = data;
										if (!employers) {
											return null;
										}
										return (
											<div className='form-group'>
												<label>
													Employer:
													<select
														className='form-control'
														ref={(node) => {
															employerId = node;
														}}
													>
														{employers.map((employer) => {
															return (
																<option key={employer.id} value={employer.id}>
																	{employer.name}
																</option>
															);
														})}
													</select>
												</label>
											</div>
										);
									}}
								</Query>
								<br />
								<br />
								<button className='button' type='submit'>
									Add Employee
								</button>
							</form>
						)}
					</Mutation>
					<br />
					<br />
					<button className='button' onClick={this.handleCloseAddModal}>
						Close Modal
					</button>
				</ReactModal>
			</div>
		);
	}
}

export default Employees;
