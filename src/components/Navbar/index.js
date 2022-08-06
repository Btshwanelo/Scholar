import React from "react";
import icons from "../../assets/icons";
import avatar from "../../assets/images/face4.jpg";
import logo from "../../assets/images/logo.svg";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__logo}>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={style.navbar__avatar}>
        <div className={style.navbar__avatar__wrapper}>
          <img src={avatar} alt="avatar" />
          <p>School One</p>
          {icons.avatarIcon}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
