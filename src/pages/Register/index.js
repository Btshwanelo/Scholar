import React from "react";
import "./style.css";

const Register = () => {
  return (
    <div className="register">
      <div className="content__wrapper">
        <div className="form__container">
          <h4>Register</h4>
          <form className="form">
            <div className="form__group">
              <label for="usernameInput">Name</label>
              <input type="text" id="usernameInput" placeholder="Name" />
            </div>
            <div className="form__group">
              <label for="passwordInput">Email</label>
              <input type="email" id="passwordInput" placeholder="Email" />
            </div>
            <div className="form__group">
              <label for="passwordInput">Password</label>
              <input type="password" id="passwordInput" placeholder="Password" />
            </div>
            <div className="form__group">
              <label for="passwordInput">Confirm Password</label>
              <input type="password" id="passwordInput" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn--submit">
              Submit
            </button>
            <button className=" btn btn--cancel">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
