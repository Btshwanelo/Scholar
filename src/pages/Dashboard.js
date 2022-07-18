import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="breadcrumb">
          <ol className="breadcrumb-container">
            <li className="breadcrumb-item">Home </li>
            <li className="breadcrumb-item">Dashboard </li>
          </ol>
        </div>
        <div>
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
          <div>Card 4</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
