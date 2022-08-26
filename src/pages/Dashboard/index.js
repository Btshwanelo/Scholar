import React from "react";

import {
  BookmarkIcon,
  HourClassIcon,
  LabelIcon,
  PictureIcon,
} from "../../assets/icons";
import "./style.css";
import { DashboardLayout } from "../../Layouts/";
import { DashboardCard } from "../../components";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="main-container">
        <div className="first-card">
          <DashboardCard
            title={"PROFILE"}
            icon={<BookmarkIcon />}
            navigateTo={"profile"}
          />
        </div>
        <div className="second-card">
          <DashboardCard
            title={"STUDENTS"}
            icon={<HourClassIcon />}
            navigateTo={"students"}
          />
        </div>

        <div className="third-card">
          <DashboardCard
            title={"MODULES"}
            icon={<LabelIcon />}
            navigateTo={"modules"}
          />
        </div>
        <div className="fourth-card">
          <DashboardCard
            title={"COURSES"}
            icon={<PictureIcon />}
            navigateTo={"courses"}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
