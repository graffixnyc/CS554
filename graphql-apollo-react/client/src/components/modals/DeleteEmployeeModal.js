import React, { useState } from 'react';
import '../App.css';
import { useMutation } from '@apollo/client';
import ReactModal from 'react-modal';

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

function DeleteEmployeeModal(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(props.isOpen);
  const [employee, setEmployee] = useState(props.deleteEmployee);

  const [removeEmployee] = useMutation(queries.DELETE_EMPLOYEE, {
    update(cache, { data: { removeEmployee } }) {
      const { employees } = cache.readQuery({
        query: queries.GET_EMPLOYEES
      });
      cache.writeQuery({
        query: queries.GET_EMPLOYEES,
        data: {
          employees: employees.filter((e) => e.id !== employee.id)
        }
      });
    }
  });

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setEmployee(null);
    props.handleClose(false);
  };

  return (
    <div>
      {/*Delete Employee Modal */}
      <ReactModal
        name="deleteModal"
        isOpen={showDeleteModal}
        contentLabel="Delete Employee"
        style={customStyles}
      >
        {/*Here we set up the mutation, since I want the data on the page to update
				after I have added someone, I need to update the cache. If not then
				I need to refresh the page to see the data updated 

				See: https://www.apollographql.com/docs/react/essentials/mutations for more
				information on Mutations
			*/}
        <div>
          <p>
            Are you sure you want to delete {employee.firstName}{' '}
            {employee.lastName}?
          </p>

          <form
            className="form"
            id="delete-employee"
            onSubmit={(e) => {
              e.preventDefault();
              removeEmployee({
                variables: {
                  id: employee.id
                }
              });
              setShowDeleteModal(false);

              alert('Employee Deleted');
              props.handleClose();
            }}
          >
            <br />
            <br />
            <button className="button add-button" type="submit">
              Delete Employee
            </button>
          </form>
        </div>

        <br />
        <br />
        <button
          className="button cancel-button"
          onClick={handleCloseDeleteModal}
        >
          Cancel
        </button>
      </ReactModal>
    </div>
  );
}

export default DeleteEmployeeModal;
