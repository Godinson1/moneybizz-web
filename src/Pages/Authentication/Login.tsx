import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

const Login: FC = () => {
  const [error, setError] = useState<boolean | string>(false);
  return (
    <div>
      <div className="auth">
        <div className="flex-between">
          <div className="ring"></div>
          <div className="ring-two"></div>
        </div>
        <div className="login">
          {error && (
            <div className="ui error message">
              <i onClick={() => setError(false)} className="close icon"></i>
              <div className="header">Error trying to Login..</div>
              <p>{error}</p>
            </div>
          )}
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
        <div className="flex-between">
          <div className="ring-three"></div>
          <div className="ring-four"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
