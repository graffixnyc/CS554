const { ApolloServer, gql } = require('apollo-server');
const lodash = require('lodash');
const uuid = require('uuid');
//some Mock data
let employees = [
  {
    id: uuid.v4(),
    firstName: 'Patrick',
    lastName: 'Hill',
    employerId: 1
  },
  {
    id: uuid.v4(),
    firstName: 'Jimi',
    lastName: 'Hendrix',
    employerId: 1
  },
  {
    id: uuid.v4(),
    firstName: 'Jim',
    lastName: 'Morrison',
    employerId: 2
  },
  {
    id: uuid.v4(),
    firstName: 'Roger',
    lastName: 'Waters',
    employerId: 1
  },
  {
    id: uuid.v4(),
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
  },
  {
    id: 3,
    name: 'Apple'
  }
];

//Create the type definitions for the query and our data
const typeDefs = gql`
  type Query {
    employers: [Employer]
    employees: [Employee]
    employer(id: Int): Employer
    employee(id: String): Employee
  }

  type Employer {
    id: Int
    name: String
    employees: [Employee]
    numOfEmployees: Int
  }

  type Employee {
    id: String
    firstName: String
    lastName: String
    employer: Employer
  }

  type Mutation {
    addEmployee(
      firstName: String!
      lastName: String!
      employerId: Int!
    ): Employee
    removeEmployee(id: String!): Employee
    editEmployee(
      id: String!
      firstName: String
      lastName: String
      employerId: Int
    ): Employee
    addEmployer(name: String!): Employer
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
			//console.log(`parentValue in Employee`, parentValue);
      return employers.filter((e) => e.id === parentValue.employerId)[0];
    }
  },
  Mutation: {
    addEmployee: (_, args) => {
      const newEmployee = {
        id: uuid.v4(),
        firstName: args.firstName,
        lastName: args.lastName,
        employerId: args.employerId
      };
      employees.push(newEmployee);
      return newEmployee;
    },
    removeEmployee: (_, args) => {
      return lodash.remove(employees, (e) => e.id == args.id)[0];
    },
    editEmployee: (_, args) => {
      let newEmployee;
      employees = employees.map((e) => {
        if (e.id === args.id) {
          if (args.firstName) {
            e.firstName = args.firstName;
          }
          if (args.lastName) {
            e.lastName = args.lastName;
          }
          if (args.employerId) {
            e.employerId = args.employerId;
          }
          newEmployee = e;
          return e;
        }
        return e;
      });
      return newEmployee;
    },
    addEmployer: (_, args) => {
      const newEmployer = {
        id: employers.length + 1,
        name: args.name
      };
      employers.push(newEmployer);
      return newEmployer;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url} 🚀`);
});
