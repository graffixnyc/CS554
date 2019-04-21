import React, { Component } from "react";
//Import Query from react-apollo
import { Query, Mutation } from "react-apollo";
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
class EditEmployeesModal extends Component {
  constructor(props) {
    //console.log(this.props.employee);
    super(props);
    this.state = {
      showEditModal: this.props.isOpen,
      employee: this.props.employee
    };
    this.handleCloseEditModal = this.handleCloseEditModal.bind(this);
  }

  handleCloseEditModal() {
    this.setState({ showEditModal: false, employee: null });
    this.props.handleClose();
  }

  render() {
    let firstName;
    let lastName;
    let employerId;
    return (
      <div>
        {/*Edit Employee Modal - NOT DONE YET */}
        <ReactModal
          name="editModal"
          isOpen={this.state.showEditModal}
          contentLabel="Edit Employee"
          style={customStyles}
        >
          <Mutation mutation={queries.EDIT_EMPLOYEE}>
            {(editEmployee, { data }) => (
              <form
                className="form"
                id="add-employee"
                onSubmit={e => {
                  console.log(firstName.value);
                  console.log(lastName.value);
                  console.log(parseInt(employerId.value));
                  e.preventDefault();
                  editEmployee({
                    variables: {
                      id: this.props.employee.id,
                      firstName: firstName.value,
                      lastName: lastName.value,
                      employerId: parseInt(employerId.value)
                    }
                  });
                  firstName.value = "";
                  lastName.value = "";
                  employerId.value = "1";
                  this.setState({ showEditModal: false });
                  alert("Employee Updated");
                  this.props.handleClose();
                }}
              >
                <div className="form-group">
                  <label>
                    First Name:
                    <br />
                    <input
                      ref={node => {
                        firstName = node;
                      }}
                      defaultValue={this.props.employee.firstName}
                      autoFocus={true}
                    />
                  </label>
                </div>
                <br />
                <div className="form-group">
                  <label>
                    Last Name:
                    <br />
                    <input
                      ref={node => {
                        lastName = node;
                      }}
                      defaultValue={this.props.employee.lastName}
                    />
                  </label>
                </div>
                <br />

                <Query query={queries.GET_EMPLOYERS}>
                  {({ data }) => {
                    const { employers } = data;
                    if (!employers) {
                      return null;
                    }
                    return (
                      <div className="form-group">
                        <label>
                          Employer:
                          <select
                            defaultValue={this.props.employee.employer.id}
                            className="form-control"
                            ref={node => {
                              employerId = node;
                            }}
                          >
                            {employers.map(employer => {
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
                <button className="button add-button" type="submit">
                  Update Employee
                </button>
              </form>
            )}
          </Mutation>
          <button
            className="button cancel-button"
            onClick={this.handleCloseEditModal}
          >
            Cancel
          </button>
        </ReactModal>
      </div>
    );
  }
}

export default EditEmployeesModal;
