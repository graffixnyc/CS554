import React, { Component } from "react";
//Import Query from react-apollo
import { Mutation } from "react-apollo";
import ReactModal from "react-modal";

//Import the file where my query constants are defined
import queries from "../../queries";

//For react-modal
ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    border: "1px solid #28547a",
    borderRadius: "4px"
  }
};

/* The React Apollo package grants access to a Query component, which takes a query as prop and executes it when its rendered. 
That’s the important part: it executes the query when it is rendered. 
It uses React’s render props pattern, using a child as a function implementation where you can access the result of the query as an argument.
*/
class DeleteEmployeeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: this.props.isOpen,
      employee: this.props.deleteEmployee
    };
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
    console.log(this.state.employee);
  }

  handleOpenDeleteModal() {
    this.setState({ showDeleteModal: true });
  }

  handleCloseDeleteModal() {
    this.setState({ showDeleteModal: false });
    this.props.handleClose(false);
  }
  render() {
    return (
      <div>
        {/*Add Employee Modal */}
        <ReactModal
          name="deleteModal"
          isOpen={this.state.showDeleteModal}
          contentLabel="Delete Employee"
          style={customStyles}
        >
          {/*Here we set up the mutation, since I want the data on the page to update
						after I have added someone, I need to update the cache. If not then
						I need to refresh the page to see the data updated 

						See: https://www.apollographql.com/docs/react/essentials/mutations for more
						information on Mutations
					*/}
          <Mutation
            mutation={queries.DELETE_EMPLOYEE}
            update={(cache, { data: { removeEmployee } }) => {
              const { employees } = cache.readQuery({
                query: queries.GET_EMPLOYEES
              });
              cache.writeQuery({
                query: queries.GET_EMPLOYEES,
                data: {
                  employees: employees.filter(
                    e => e.id !== this.state.employee.id
                  )
                }
              });
            }}
          >
            {(removeEmployee, { data }) => (
              <div>
                <p>
                  Are you sure you want to delete{" "}
                  {this.state.employee.firstName} {this.state.employee.lastName}
                  ?
                </p>

                <form
                  className="form"
                  id="delete-employee"
                  onSubmit={e => {
                    e.preventDefault();
                    removeEmployee({
                      variables: {
                        id: this.state.employee.id
                      }
                    });
                    this.setState({ showDeleteModal: false });
                    alert("Employee Deleted");
                    this.props.handleClose();
                  }}
                >
                  <br />
                  <br />
                  <button className="button add-button" type="submit">
                    Delete Employee
                  </button>
                </form>
              </div>
            )}
          </Mutation>
          <br />
          <br />
          <button
            className="button cancel-button"
            onClick={this.handleCloseDeleteModal}
          >
            Cancel
          </button>
        </ReactModal>
      </div>
    );
  }
}

export default DeleteEmployeeModal;
