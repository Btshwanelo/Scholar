import React from "react";
import icons from "../../assets/icons";
import avatar from "../../assets/images/face4.jpg";
import logo from "../../assets/images/logo.svg";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar__avatar">
        <div className="navbar__avatar__wrapper">
          <img src={avatar} alt="avatar" />
          <p>School One</p>
          {icons.avatarIcon}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
