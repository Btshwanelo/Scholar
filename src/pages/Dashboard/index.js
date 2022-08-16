import React from "react";
import icons from "../../assets/icons";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../Layouts/";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="card">
        <div
          className="card__body"
          onClick={() => navigate("/dashboard/profile")}
        >
          <div>{icons.bookmarkIcon}</div>

          <h4>PROFILE</h4>
        </div>
      </div>
      <div className="card">
        <div
          className="card__body"
          onClick={() => navigate("/dashboard/students")}
        >
          {icons.hourClassIcon}
          <h4>STUDENTS</h4>
        </div>
      </div>
      <div className="card">
        <div
          className="card__body"
          onClick={() => navigate("/dashboard/modules")}
        >
          {icons.labelIcon}
          <h4>MODULES</h4>
        </div>
      </div>
      <div className="card">
        <div
          className="card__body"
          onClick={() => navigate("/dashboard/courses")}
        >
          {icons.pictureIcon}
          <h4>COURSES</h4>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
