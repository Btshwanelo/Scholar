import React from 'react';

import { BookmarkIcon, HourClassIcon, LabelIcon, PictureIcon } from '../../assets/icons';
import { DashboardCard } from '../../components';
import { DashboardLayout } from '../../layouts/';
import './style.css';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="main-container">
        <div className="profile-card">
          <DashboardCard title={'PROFILE'} icon={<BookmarkIcon />} navigateTo={'profile'} />
        </div>
        <div className="students-card">
          <DashboardCard title="Students" icon={<HourClassIcon />} navigateTo={'students'} />
        </div>

        <div className="modules-card">
          <DashboardCard title={'MODULES'} icon={<LabelIcon />} navigateTo={'modules'} />
        </div>
        <div className="courses-card">
          <DashboardCard title={'COURSES'} icon={<PictureIcon />} navigateTo={'courses'} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
