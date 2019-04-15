import gql from 'graphql-tag';

const GET_EMPLOYEES = gql`
	query {
		employees {
			id
			firstName
			lastName
			employer {
				name
				id
			}
		}
	}
`;

const GET_EMPLOYERS = gql`
	query {
		employers {
			name
			id
		}
	}
`;

const ADD_EMPLOYEE = gql`
	mutation createEmployee($firstName: String!, $lastName: String!, $employerId: Int!) {
		addEmployee(firstName: $firstName, lastName: $lastName, employerId: $employerId) {
			id
			firstName
			lastName
			employer {
				name
				id
			}
		}
	}
`;

const DELETE_EMPLOYEE = gql`
	mutation deleteEmployee($id: Int!) {
		removeEmployee(id: $id) {
			id
			firstName
			lastName
			employer {
				name
				id
			}
		}
	}
`;

export default { ADD_EMPLOYEE, GET_EMPLOYEES, GET_EMPLOYERS, DELETE_EMPLOYEE };
