import React from "react";
import { Navbar, Breadcrumb } from "../../components";
import "./style.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="Headers">
        <Navbar />
      </div>
      <div className="Breadcrumbs">
        <Breadcrumb />
      </div>
      <div className="Mains">
        <div className="card__wrapper">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
