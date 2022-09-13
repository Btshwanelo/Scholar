import { format } from 'date-fns';
import React from 'react';

import MOCK_DATA from '../../assets/MOCK_DATA.json';
import { Table } from '../../components';
import { DashboardLayout } from '../../layouts';
import './style.css';

const Students = () => {
  const data = MOCK_DATA;

  const columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'First Name', accessor: 'first_name' },
    { Header: 'Last Name', accessor: 'last_name' },
    {
      Header: 'Date of Birth',
      accessor: 'date_of_birth',
      Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyy');
      }
    },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Phone', accessor: 'phone' }
  ];

  return (
    <DashboardLayout>
      <div className="table-container">
        <div className="table-card">
          <div className="table-card__body">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Students;
