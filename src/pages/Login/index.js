import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="login">
      <div className="content__wrapper">
        <div className="form__container">
          <h4>Login</h4>
          <form className="form">
            <div className="form__group">
              <label for="usernameInput">Username</label>
              <input type="text" id="usernameInput" placeholder="Username" />
            </div>
            <div className="form__group">
              <label for="passwordInput">Password</label>
              <input type="text" id="passwordInput" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn--submit">
              Submit
            </button>
            <button className="btn btn--cancel">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
