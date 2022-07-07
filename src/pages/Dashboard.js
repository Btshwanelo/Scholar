import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div>
          <ol  className="breadcrumb">
            <li className="breadcrumb-item">Home  </li>
            <li className="breadcrumb-item">Dashboard </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
