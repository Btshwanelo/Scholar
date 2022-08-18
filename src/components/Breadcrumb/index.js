import React from "react";

import { useNavigate } from "react-router-dom";

import "./style.css";
import WithRouter from "../HOC/index";

const Breadcrumb = (props) => {
  const pathnames = props.router.location.pathname.split("/").filter((x) => x);

  const navigate = useNavigate();

  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={name}>{name}</li>
          ) : (
            <li key={name} onClick={() => navigate(routeTo)}>
              <a href="#">{name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WithRouter(Breadcrumb);
