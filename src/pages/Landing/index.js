import React from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="main">
        <h1>WELCOME TO SCHOLAR</h1>
        <div className="main__buttons">
          <button className="btn btn--blue" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button className="btn btn--blue" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
