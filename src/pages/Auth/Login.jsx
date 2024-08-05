import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    navigate("/landing");
  }

  return (
    <form action="">
      <div className="grid-container">
        <div className="grid-item items-center">
          <img className="logo" src="/src/assets/img/Logo.png" alt="" />
          <p className="auth-p">Welcome to Back</p>
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
          <div className="remember-container">
            <div className="remember-me">
              <input type="checkbox" className="rememberMe" />
              &nbsp;Remember me
            </div>
            <Link className="auth-a" to="/forgot-password">Forgot your password</Link>
          </div>
          <br />
          <input className="button" type="button" value="Login" onClick={() => handleLogin()} />
          <br />
          <Link className="auth-a" to="/register">Don&apos;t have an account ?</Link>
        </div>
        <div className="grid-item">
          <img
            className="img"
            src="/src/assets/img/Image Placeholder (7).png"
            alt=""
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
