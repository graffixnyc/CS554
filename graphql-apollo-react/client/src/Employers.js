import React from 'react';
//Import Query from react-apollo
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

//The actual query
const GET_EMPLOYERS = gql`
	query {
		employers {
			id
			name
			employees {
				id
				firstName
				lastName
			}
		}
	}
`;

/* The React Apollo package grants access to a Query component, which takes a query as prop and executes it when its rendered. 
That’s the important part: it executes the query when it is rendered. 
It uses React’s render props pattern, using a child as a function implementation where you can access the result of the query as an argument.
*/
const Employers = () => (
	<Query query={GET_EMPLOYERS}>
		{({ data }) => {
			const { employers } = data;
			if (!employers) {
				return null;
			}
			console.log(employers);

			return (
				<div>
					<ul>
						{employers.map((employer) => {
							return (
								<li key={employer.id}>
									{employer.name}
									<ul>
										{employer.employees.map((employee) => {
											return (
												<li key={employee.id}>
													{employee.firstName + ' ' + employee.lastName}
												</li>
											);
										})}
									</ul>
								</li>
							);
						})}
					</ul>
				</div>
			);
		}}
	</Query>
);

export default Employers;
