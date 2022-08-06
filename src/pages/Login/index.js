import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="login">
      <div className="content__wrapper">
        <div className="form__container">
          <h4>Sign In</h4>
          <form className="form">
            <div className="form__group">
              <label htmlFor="usernameInput">Email</label>
              <input type="email" id="Email" placeholder="Email" />
            </div>
            <div className="form__group">
              <label htmlFor="passwordInput">Password</label>
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
