import React from 'react';

import avatar from '../../assets/images/face4.jpg';
import { DashboardLayout } from '../../layouts';
import './style.css';

const Profile = () => {
  const profile = {
    schoolName: 'Orlando High',
    adress: '6502 Mooki St, Orlando East',
    email: 'bucibot@gmail.com',
    contactNo: +27726589444
  };
  return (
    <DashboardLayout>
      <div className="profile">
        <div className="profile-side">
          <div>
            <img src={avatar} alt="avatar" />
            <h2>{profile.schoolName}</h2>
            <p>{profile.adress}</p>
          </div>
        </div>
        <div className="profile-main">
          <div>
            <div>
              <h3>Name</h3>
              <p>{profile.schoolName}</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>{profile.email}</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>{profile.contactNo}</p>
            </div>

            <button>EDIT</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
