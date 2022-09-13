import PropTypes from 'prop-types';
import React from 'react';

import './style.css';

const Dropdown = ({ isDropdown }) => {
  return (
    <div className={isDropdown ? 'dropdown-content show' : 'dropdown-content'}>
      <a href="dashboard/profile">Profile</a>
      <a href="#">Sign Out</a>
    </div>
  );
};

Dropdown.propTypes = {
  isDropdown: PropTypes.bool
};

export default Dropdown;
