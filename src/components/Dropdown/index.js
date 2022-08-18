import React from "react";

import "./style.css";

const Dropdown = ({ isDropdown }) => {
  return (
    <div className={isDropdown ? "dropdown-content show" : "dropdown-content"}>
      <a href="#">Profile</a>
      <a href="#">Sign Out</a>
    </div>
  );
};

export default Dropdown;
