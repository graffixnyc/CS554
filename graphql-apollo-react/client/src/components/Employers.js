import React, { useState } from 'react';
import './App.css';

import AddModal from './modals/AddModal';
import { useQuery } from '@apollo/client';
import queries from '../queries';

function Employers() {
  const [showAddModal, setShowAddModal] = useState(false);
  const { loading, error, data } = useQuery(
    queries.GET_EMPLOYERS_WITH_EMPLOYEES,
    {
      fetchPolicy: 'cache-and-network',
    }
  );

  const handleCloseModals = () => {
    setShowAddModal(false);
  };

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };

  if (data) {
    const { employers } = data;

    return (
      <div>
        <button className="button" onClick={handleOpenAddModal}>
          Create Employer
        </button>
        <br />
        <br />
        <div>
          {employers.map((employer) => {
            return (
              <div className="card" key={employer.id}>
                <div className="card-body">
                  <h5 className="card-title">{employer.name}</h5>
                  <span>Number of Employees:</span> {employer.numOfEmployees}
                  <br />
                  <br />
                  <span>Employees:</span>
                  <br />
                  <ol>
                    {employer.employees.map((employee) => {
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
        {/*Add Employer Modal */}
        {showAddModal && (
          <AddModal
            isOpen={showAddModal}
            handleClose={handleCloseModals}
            modal="addEmployer"
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

export default Employers;
