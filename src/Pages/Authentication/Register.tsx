import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

const Register: FC = () => {
  const [error, setError] = useState<boolean | string>(false);
  return (
    <div>
      <div className="register-auth">
        <div className="flex-between">
          <div className="ring"></div>
          <div className="ring-two"></div>
        </div>
        <div className="register">
          {error && (
            <div className="ui error message">
              <i onClick={() => setError(false)} className="close icon"></i>
              <div className="header">Error trying to Register..</div>
              <p>{error}</p>
            </div>
          )}
          <h1 className="register-logo">MoneyBizz</h1>
          <div className="login-container">
            <div className="login-header">
              <h2>Create a Secure Account</h2>
              <p>Begin the journey to endless financial possibilities..</p>
            </div>
            <div>
              <label>First Name</label>
              <div className="login-input">
                <input type="text" />
              </div>
            </div>
            <div>
              <label>Last Name</label>
              <div className="login-input">
                <input type="text" />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div className="login-input">
                <input type="email" />
              </div>
            </div>
            <div>
              <label>Handle</label>
              <div className="login-input">
                <input type="text" />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div className="login-input">
                <input type="password" />
              </div>
            </div>
            <div className="auth-button">Register</div>
            <div className="base">
              <p>
                Already have an account? <Link to="/login">Login</Link>
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

export default Register;
