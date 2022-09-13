import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

const DashboardCard = ({ title, icon, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-card">
      <div className="card-body" onClick={() => navigate(`/dashboard/${navigateTo}`)}>
        {icon}

        <h3>{title}</h3>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  navigateTo: PropTypes.string
};

export default DashboardCard;
