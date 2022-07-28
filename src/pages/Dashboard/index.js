import React from "react";
import { Navbar, Breadcrumb } from "../../components";
// import {
//   MdBookmarkBorder,
//   MdPictureInPicture,
//   MdHourglassEmpty,
//   MdLabelImportantOutline,
// } from "react-icons/md";
import icons from "../../assets/icons";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="main__content">
        <Breadcrumb />
        <div className="card__wrapper">
          <div className="card">
            <div className="card__body">
              {icons.bookmarkIcon}
              <h4>PROFILE</h4>
            </div>
          </div>
          <div className="card">
            <div className="card__body">
              {icons.hourClassIcon}
              <h4>STUDENTS</h4>
            </div>
          </div>
          <div className="card">
            <div className="card__body">
              {icons.labelIcon}
              <h4>MODULES</h4>
            </div>
          </div>
          <div className="card">
            <div className="card__body">
              {icons.pictureIcon}
              <h4>COURSES</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
