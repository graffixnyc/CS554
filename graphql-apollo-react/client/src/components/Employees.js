import React, { Component } from 'react';
//Import Query from react-apollo
import { Query } from 'react-apollo';

//Import the Modals for Adding and Updating Employee
import AddEmployeeModal from './modals/AddEmployeeModal';
import EditEmployeeModal from './modals/EditEmployeeModal';

//Import the file where my query constants are defined
import queries from '../queries';

/* The React Apollo package grants access to a Query component, which takes a query as prop and executes it when its rendered. 
That’s the important part: it executes the query when it is rendered. 
It uses React’s render props pattern, using a child as a function implementation where you can access the result of the query as an argument.
*/
class Employees extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showEditModal: false,
			showAddModal: false
		};
		this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
		this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
		this.handleCloseModals = this.handleCloseModals.bind(this);
	}
	handleOpenEditModal() {
		this.setState({ showEditModal: true });
	}
	handleCloseModals() {
		this.setState({ showAddModal: false, showEditModal: false });
	}

	handleOpenAddModal() {
		this.setState({ showAddModal: true });
	}
	render() {
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
				{this.state &&
				this.state.showEditModal && (
					<EditEmployeeModal isOpen={this.state.showEditModal} handleClose={this.handleCloseModals} />
				)}

				{/*Add Employee Modal */}
				{this.state &&
				this.state.showAddModal && (
					<AddEmployeeModal isOpen={this.state.showAddModal} handleClose={this.handleCloseModals} />
				)}
			</div>
		);
	}
}

export default Employees;
