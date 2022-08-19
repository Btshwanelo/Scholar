import React from "react";

import "./style.css";
import { Navbar, Breadcrumb } from "../../components";

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

export default DashboardLayout;
