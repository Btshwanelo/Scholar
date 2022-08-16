import React, { useState } from "react";
import icons from "../../assets/icons";
import avatar from "../../assets/images/face4.jpg";
import logo from "../../assets/images/logo.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div onClick={() => navigate("/dashboard")}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar__avatar" onClick={() => setDropdown(!dropdown)}>
        <div className="navbar__avatar__wrapper">
          <img src={avatar} alt="avatar" />
          <p>School One</p>
          {dropdown ? icons.avatarIconUp : icons.avatarIconDown}
        </div>
        <Dropdown dropdown={dropdown} />
      </div>
    </div>
  );
};

export default Navbar;
