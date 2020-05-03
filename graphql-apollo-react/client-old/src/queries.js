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

const GET_EMPLOYERS_WITH_EMPLOYEES = gql`
  query {
    employers {
      id
      name
      numOfEmployees
      employees {
        id
        firstName
        lastName
      }
    }
  }
`;

const ADD_EMPLOYEE = gql`
  mutation createEmployee(
    $firstName: String!
    $lastName: String!
    $employerId: Int!
  ) {
    addEmployee(
      firstName: $firstName
      lastName: $lastName
      employerId: $employerId
    ) {
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

const ADD_EMPLOYER = gql`
  mutation createEmployer($name: String!) {
    addEmployer(name: $name) {
      id
      name
      numOfEmployees
      employees {
        firstName
        lastName
        id
      }
    }
  }
`;

const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: String!) {
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

const EDIT_EMPLOYEE = gql`
  mutation changeEmployee(
    $id: String!
    $firstName: String
    $lastName: String
    $employerId: Int
  ) {
    editEmployee(
      id: $id
      employerId: $employerId
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      firstName
      lastName
      employer {
        id
        name
      }
    }
  }
`;

export default {
  ADD_EMPLOYEE,
  GET_EMPLOYEES,
  GET_EMPLOYERS,
  DELETE_EMPLOYEE,
  GET_EMPLOYERS_WITH_EMPLOYEES,
  ADD_EMPLOYER,
  EDIT_EMPLOYEE
};
