import React from "react";

import { useNavigate } from "react-router-dom";

import "./landing.css";
import { Navbar } from "../../components/";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-header">
        <Navbar />
      </div>
      <div className="landing-main">
        <h1>WELCOME TO SCHOLAR</h1>
        <div>
          <button className="signin-btn" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
