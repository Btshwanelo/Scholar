import PropTypes from 'prop-types';
import React from 'react';

import { Breadcrumb, Navbar } from '../../components';
import './style.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Navbar />
      </div>
      <div className="dashboard-breadcrumbs">
        <Breadcrumb />
      </div>
      <div className="dashboard-main">
        <div className="card-wrapper">{children}</div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout;
