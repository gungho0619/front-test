import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <form>
      <div className="grid-container">
        <div className="grid-item items-center">
          <img className="logo" src="/src/assets/img/Logo.png" alt="" />
          <p className="auth-p">Sign up</p>
          <input
            className="input"
            placeholder="Enter your email"
            type="email"
            required
          />
          <input
            className="input"
            placeholder="Enter your password"
            type="password"
            required
          />
          <input
            className="input"
            placeholder="Enter your password again"
            type="password"
            required
          />
          <input className="button" type="button" value="Sign up" onClick={(e) => handleRegister(e)} />
          <br />
          <Link className="auth-a" to="/login">Already have an account ?</Link>
        </div>
        <div className="grid-item">
          <img className="img" src="/src/assets/img/Image 4.png" alt="" />
        </div>
      </div>
    </form>
  );
};

export default Register;
