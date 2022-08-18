import React from "react";

import "./style.css";

const Dropdown = ({ dropdown }) => {
  return (
    <div
      id="myDropdown"
      className={dropdown ? "dropdown-content show" : "dropdown-content"}
    >
      <a href="#about">Profile</a>
      <a href="#contact">Sign Out</a>
    </div>
  );
};

export default Dropdown;
