import React, { Component } from "react";
//Import Query from react-apollo
import { Query } from "react-apollo";

//Import the Modals for Adding and Updating Employee
import AddModal from "./modals/AddModal";

//Import the file where my query constants are defined
import queries from "../queries";

/* The React Apollo package grants access to a Query component, which takes a query as prop and executes it when its rendered. 
That’s the important part: it executes the query when it is rendered. 
It uses React’s render props pattern, using a child as a function implementation where you can access the result of the query as an argument.
*/
class Employers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddModal: false
    };
    //this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
    this.handleCloseModals = this.handleCloseModals.bind(this);
  }

  handleCloseModals() {
    this.setState({ showAddModal: false });
  }

  handleOpenAddModal() {
    this.setState({ showAddModal: true });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.handleOpenAddModal}>
          Create Employer
        </button>
        <br />
        <br />
        <Query
          query={queries.GET_EMPLOYERS_WITH_EMPLOYEES}
          fetchPolicy={"cache-and-network"}
        >
          {({ data }) => {
            const { employers } = data;
            if (!employers) {
              return null;
            }
            return (
              <div>
                {employers.map(employer => {
                  return (
                    <div className="card" key={employer.id}>
                      <div className="card-body">
                        <h5 className="card-title">{employer.name}</h5>
                        <span>Number of Employees:</span>{" "}
                        {employer.numOfEmployees}
                        <br />
                        <br />
                        <span>Employees:</span>
                        <br />
                        <ol>
                          {employer.employees.map(employee => {
                            return (
                              <li key={employee.id}>
                                {employee.firstName} {employee.lastName}
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }}
        </Query>

        {/*Add Employer Modal */}
        {this.state && this.state.showAddModal && (
          <AddModal
            isOpen={this.state.showAddModal}
            handleClose={this.handleCloseModals}
            modal="addEmployer"
          />
        )}
      </div>
    );
  }
}

export default Employers;
