import React from "react";
import Navbar from "../components/Navbar";
import {
  MdBookmark,
  MdFlipToFront,
  MdHourglassEmpty,
  MdLabelImportantOutline,
} from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="main">
        <div className="breadcrumb">
          <ol className="breadcrumb-container">
            <li className="breadcrumb-item">Home </li>
            <li className="breadcrumb-item">Dashboard </li>
          </ol>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <MdBookmark />
              <h4>PROFILE</h4>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <MdFlipToFront />
              <h4>STUDENTS</h4>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <MdHourglassEmpty />
              <h4>MODULES</h4>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <MdLabelImportantOutline />
              <h4>COURSES</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
