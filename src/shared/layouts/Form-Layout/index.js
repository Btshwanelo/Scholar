import React from 'react';

import PropTypes from 'prop-types';

import './style.css';
import { Navbar } from '../../components';

const FormLayout = ({ children }) => {
  return (
    <div className="form-layout">
      <div className="form-layout-header">
        <Navbar />
      </div>
      <div className="form-layout-main">
        <div className="form-card-body">{children}</div>
      </div>
    </div>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node
};

export default FormLayout;
