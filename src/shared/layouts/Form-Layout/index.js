import PropTypes from 'prop-types';
import React from 'react';

import { Navbar } from '../../components';
import './style.css';

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
