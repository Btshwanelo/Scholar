import React from "react";
import WithRouter from "../HOC/WithRouter";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Breadcrumb = (props) => {
  
  const pathnames = props.router.location.pathname.split("/").filter((x) => x);
  const navigate = useNavigate();
  return (
    <div className={style.breadcrumb__container}>
      <ol className={style.breadcrumb}>
        {pathnames.length > 0 ? (
          <li onClick={() => navigate("/")} className={style.breadcrumb__item}>
            Home{" "}
          </li>
        ) : (
          <li className={style.breadcrumb__item}>Home </li>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li
              key={name}
              className={`${style.breadcrumb__item}} ${style.breadcrumb__item__active}`}
            >
              {name}
            </li>
          ) : (
            <li
              key={name}
              onClick={() => navigate(routeTo)}
              className={style.breadcrumb__item}
            >
              {name}{" "}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default WithRouter(Breadcrumb);
