import React from 'react';

import courses from '../../assets/mock-data/courses.json';
import { Table } from '../../components';
import { DashboardLayout } from '../../layouts';
import './style.css';

const Courses = () => {
  const data = courses;

  const columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Course Name', accessor: 'course_name' },
    { Header: 'Course Code', accessor: 'course_code' }
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

export default Courses;
