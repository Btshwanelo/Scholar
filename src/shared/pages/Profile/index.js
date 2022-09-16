import React from 'react';

import avatar from '../../assets/images/face4.jpg';
import schools from '../../assets/mock-data/schools.json';
import { DashboardLayout } from '../../layouts';
import './style.css';

const Profile = () => {
  const profile = schools[0];
  return (
    <DashboardLayout>
      <div className="profile">
        <div className="profile-side">
          <div>
            <img src={avatar} alt="avatar" />
            <h2>{profile.name}</h2>
            <p>{profile.address}</p>
          </div>
        </div>
        <div className="profile-main">
          <div>
            <div>
              <h3>Name</h3>
              <p>{profile.name}</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>{profile.email}</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>{profile.phone}</p>
            </div>

            <button>EDIT</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
