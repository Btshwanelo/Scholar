import { format } from 'date-fns';
import React from 'react';

import modules from '../../assets/mock-data/modules.json';
import { Table } from '../../components';
import { DashboardLayout } from '../../layouts';
import './style.css';

const Modules = () => {
  const data = modules;

  const columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Module Name', accessor: 'module_name' },
    { Header: 'Module Code', accessor: 'module_code' }
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

export default Modules;
