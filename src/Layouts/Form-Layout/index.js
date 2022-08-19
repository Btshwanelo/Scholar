import React from "react";

import "./style.css";
import { Navbar } from "../../components";

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

export default FormLayout;
