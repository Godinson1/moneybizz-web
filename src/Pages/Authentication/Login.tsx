import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

const Login: FC = () => {
  return (
    <div>
      <div className="auth">
        <div className="login">
          <h1 className="login-logo">MoneyBizz</h1>
          <div className="login-container">
            <div className="login-header">
              <h2>Login to your Account</h2>
              <p>Securely login to your moneybizz account.</p>
            </div>
            <div>
              <label>Email or Handle</label>
              <div className="login-input">
                <input type="text" />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div className="login-input">
                <input type="text" />
              </div>
            </div>
            <div className="auth-button">Login</div>
            <div className="base">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
