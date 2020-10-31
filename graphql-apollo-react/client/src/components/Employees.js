import React, { useState } from 'react';
import './App.css';
import AddModal from './modals/AddModal';
import EditEmployeeModal from './modals/EditEmployeeModal';
import DeleteEmployeeModal from './modals/DeleteEmployeeModal';
import { useQuery } from '@apollo/client';
import queries from '../queries';

function Employees() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [deleteEmployee, setDeleteEmployee] = useState(null);
  const { loading, error, data } = useQuery(queries.GET_EMPLOYEES, {
    fetchPolicy: 'cache-and-network'
  });

  const handleOpenEditModal = (employee) => {
    setShowEditModal(true);
    setEditEmployee(employee);
  };

  const handleOpenDeleteModal = (employee) => {
    setShowDeleteModal(true);
    setDeleteEmployee(employee);
  };
  const handleCloseModals = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
    setShowAddModal(false);
  };

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };
  if (data) {
    const { employees } = data;

    return (
      <div>
        <button className="button" onClick={handleOpenAddModal}>
          Create Employee
        </button>
        <br />
        <br />

        {employees.map((employee) => {
          return (
            <div className="card" key={employee.id}>
              <div className="card-body">
                <h5 className="card-title">
                  {employee.firstName} {employee.lastName}
                </h5>
                Employer: {employee.employer.name}
                <br />
                <button
                  className="button"
                  onClick={() => {
                    handleOpenEditModal(employee);
                  }}
                >
                  Edit
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleOpenDeleteModal(employee);
                  }}
                >
                  Delete
                </button>
                <br />
              </div>
            </div>
          );
        })}

        {/*Edit Employee Modal*/}
        {showEditModal && showEditModal && (
          <EditEmployeeModal
            isOpen={showEditModal}
            employee={editEmployee}
            handleClose={handleCloseModals}
          />
        )}

        {/*Add Employee Modal */}
        {showAddModal && showAddModal && (
          <AddModal
            isOpen={showAddModal}
            handleClose={handleCloseModals}
            modal="addEmployee"
          />
        )}

        {/*Delete Employee Modal */}
        {showDeleteModal && showDeleteModal && (
          <DeleteEmployeeModal
            isOpen={showDeleteModal}
            handleClose={handleCloseModals}
            deleteEmployee={deleteEmployee}
          />
        )}
      </div>
    );
  } else if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
}

export default Employees;
