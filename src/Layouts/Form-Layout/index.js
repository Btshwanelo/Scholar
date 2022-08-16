import React from "react";
import { Navbar } from "../../components";
import "./style.css";

const FormLayout = ({ children }) => {
  return (
    <div className="signup">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
