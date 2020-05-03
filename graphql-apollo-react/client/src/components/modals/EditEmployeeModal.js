import React, { useState } from 'react';
import '../App.css';
import ReactModal from 'react-modal';
import { useQuery, useMutation } from '@apollo/client';
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

function EditEmployeeModal(props) {
	const [ showEditModal, setShowEditModal ] = useState(props.isOpen);
	const [ employee, setEmployee ] = useState(props.employee);
	const { loading, error, data } = useQuery(queries.GET_EMPLOYERS);
	const [ editEmployee ] = useMutation(queries.EDIT_EMPLOYEE);
	const handleCloseEditModal = () => {
		setShowEditModal(false);
		setEmployee(null);

		props.handleClose();
	};

	let firstName;
	let lastName;
	let employerId;
	if (data) {
		var { employers } = data;
	}
	if (loading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	return (
		<div>
			{/*Edit Employee Modal - NOT DONE YET */}
			<ReactModal name='editModal' isOpen={showEditModal} contentLabel='Edit Employee' style={customStyles}>
				<form
					className='form'
					id='add-employee'
					onSubmit={(e) => {
						console.log(firstName.value);
						console.log(lastName.value);
						console.log(parseInt(employerId.value));
						e.preventDefault();
						editEmployee({
							variables: {
								id: props.employee.id,
								firstName: firstName.value,
								lastName: lastName.value,
								employerId: parseInt(employerId.value)
							}
						});
						firstName.value = '';
						lastName.value = '';
						employerId.value = '1';
						setShowEditModal(false);

						alert('Employee Updated');
						props.handleClose();
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
								defaultValue={employee.firstName}
								autoFocus={true}
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
								defaultValue={employee.lastName}
							/>
						</label>
					</div>
					<br />

					<div className='form-group'>
						<label>
							Employer:
							<select
								defaultValue={employee.employer.id}
								className='form-control'
								ref={(node) => {
									employerId = node;
								}}
							>
								{employers &&
									employers.map((employer) => {
										return (
											<option key={employer.id} value={employer.id}>
												{employer.name}
											</option>
										);
									})}
							</select>
						</label>
					</div>
					<br />
					<br />
					<button className='button add-button' type='submit'>
						Update Employee
					</button>
				</form>

				<button className='button cancel-button' onClick={handleCloseEditModal}>
					Cancel
				</button>
			</ReactModal>
		</div>
	);
}

export default EditEmployeeModal;
