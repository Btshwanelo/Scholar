import { format } from 'date-fns';
import React from 'react';

import students from '../../assets/mock-data/students.json';
import { Table } from '../../components';
import { DashboardLayout } from '../../layouts';
import './style.css';

const Students = () => {
  const data = students;

  const columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'First Name', accessor: 'student_name' },
    { Header: 'Last Name', accessor: 'surname' },
    { Header: 'Gender', accessor: 'gender' },
    { Header: 'Email', accessor: 'email' },
    {
      Header: 'Date of Birth',
      accessor: 'date_of_birth',
      Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyy');
      }
    },
    { Header: 'Phone', accessor: 'contact_number' }
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
