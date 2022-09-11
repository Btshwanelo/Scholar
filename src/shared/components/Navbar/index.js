import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './style.css';
import Dropdown from '../Dropdown';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/face4.jpg';
import { UpIcon, DownIcon } from '../../assets/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div onClick={() => navigate('/dashboard')}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar-avatar" onClick={() => setIsDropdown(!isDropdown)}>
        <div className="avatar-wrapper">
          <img src={avatar} alt="avatar" />
          <p>Orlando High</p>
          {isDropdown ? <UpIcon /> : <DownIcon />}
        </div>
        <Dropdown isDropdown={isDropdown} />
      </div>
    </div>
  );
};

export default Navbar;
