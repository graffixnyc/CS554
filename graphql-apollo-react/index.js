const { ApolloServer, gql } = require('apollo-server');

//some Mock data
let employees = [
	{
		id: 1,
		firstName: 'Patrick',
		lastName: 'Hill',
		employerId: 1
	},
	{
		id: 2,
		firstName: 'Jimi',
		lastName: 'Hendrix',
		employerId: 1
	},
	{
		id: 3,
		firstName: 'Jim',
		lastName: 'Morrison',
		employerId: 2
	},
	{
		id: 4,
		firstName: 'Roger',
		lastName: 'Waters',
		employerId: 1
	},
	{
		id: 5,
		firstName: 'John',
		lastName: 'Smith',
		employerId: 2
	}
];

let employers = [
	{
		id: 1,
		name: 'Stevens Institute of Technology'
	},
	{
		id: 2,
		name: 'Google'
	}
];

//Create the type definitions for the query and our data
const typeDefs = gql`
	type Query {
		employers: [Employer]
		employees: [Employee]
		employer(id: Int): Employer
		employee(id: Int): Employee
	}

	type Employer {
		id: Int
		name: String
		employees: [Employee]
		numOfEmployees: Int
	}

	type Employee {
		id: Int
		firstName: String
		lastName: String
		employer: Employer
	}

	type Mutation {
		addEmployee(firstName: String!, lastName: String!, employerId: Int!): Employee
		removeEmployee(id: Int!): [Employee]
		changeEmployeeFirstName(id: Int!, firstName: String!): Employee
		changeEmployeeLastName(id: Int!, lastName: String!): Employee
		changeEmployer(id: Int!, employerId: Int!): Employee
	}
`;

/* parentValue - References the type def that called it
    so for example when we execute numOfEmployees we can reference
    the parent's properties with the parentValue Paramater
*/

/* args - Used for passing any arguments in from the client
    for example, when we call 
    addEmployee(firstName: String!, lastName: String!, employerId: Int!): Employee
		
*/

const resolvers = {
	Query: {
		employer: (_, args) => employers.filter((e) => e.id === args.id)[0],
		employee: (_, args) => employees.filter((e) => e.id === args.id)[0],
		employers: () => employers,
		employees: () => employees
	},
	Employer: {
		numOfEmployees: (parentValue) => {
			console.log(`parentValue in Employer`, parentValue);
			return employees.filter((e) => e.employerId === parentValue.id).length;
		},
		employees: (parentValue) => {
			return employees.filter((e) => e.employerId === parentValue.id);
		}
	},
	Employee: {
		employer: (parentValue) => {
			return employers.filter((e) => e.id === parentValue.employerId)[0];
		}
	},
	Mutation: {
		addEmployee: (_, args) => {
			const newEmployee = {
				id: employees.length + 1,
				firstName: args.firstName,
				lastName: args.lastName,
				employerId: args.employerId
			};
			employees.push(newEmployee);
			return newEmployee;
		},
		removeEmployee: (_, args) => {
			return employees.filter((e) => e.id !== args.id);
		},
		changeEmployeeFirstName: (_, args) => {
			let newEmployee;
			employees = employees.map((e) => {
				if (e.id === args.id) {
					newEmployee = {
						...e,
						firstName: args.firstName
					};
					return newEmployee;
				}
				return e;
			});
			return newEmployee;
		},
		changeEmployeeLastName: (_, args) => {
			let newEmployee;
			employees = employees.map((e) => {
				if (e.id === args.id) {
					newEmployee = {
						...e,
						lastName: args.lastName
					};
					return newEmployee;
				}
				return e;
			});
			return newEmployee;
		},
		changeEmployer: (_, args) => {
			let newEmployee;
			employees = employees.map((e) => {
				if (e.id === args.id) {
					newEmployee = {
						...e,
						employerId: args.employerId
					};
					return newEmployee;
				}
				return e;
			});
			return newEmployee;
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url} 🚀`);
});
