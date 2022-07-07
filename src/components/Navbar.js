import React from "react";
import avatar from "../assets/images/face4.jpg";
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div>
          <img src={logo} alt="logo"/>
        </div>
      </div>
      <div className="navbar-icon">
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
