import React from "react";

import "./style.css";
import { DashboardLayout } from "../../Layouts";
import avatar from "../../assets/images/face4.jpg";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="profile">
        <div className="profile-side">
          <div>
            <img src={avatar} alt="avatar" />
            <h2>Orlando High</h2>
            <p>6502 Mooki St, Orlando East</p>
          </div>
        </div>
        <div className="profile-main">
          <div>
            <div>
              <h3>Name</h3>
              <p>Orlando High</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>bucibot@gmail.com</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>000 000 0000</p>
            </div>

            <button>EDIT</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
