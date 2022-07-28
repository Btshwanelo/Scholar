import React from "react";
import "./style.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb__container">
      <ol className="breadcrumb">
        <li className="breadcrumb__item">Home </li>
        <li className="breadcrumb__item">Dashboard </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
