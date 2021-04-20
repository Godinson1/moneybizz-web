import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

const Register: FC = () => {
  return (
    <div>
      <div className="auth">
        <div className="register">
          <h1 className="login-logo">MoneyBizz</h1>
          <div className="login-container">
            <div className="login-header">
              <h2>Create a Secure Account</h2>
              <p>Begin the journey to endless financial possibilities..</p>
            </div>
            <div>
              <label>FirstName</label>
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
                <input type="text" />
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
                <input type="text" />
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
      </div>
    </div>
  );
};

export default Register;
