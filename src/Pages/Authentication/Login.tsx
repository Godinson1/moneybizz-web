import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  LOGIN_FORM,
  LOGIN_ERROR_HEADER,
  LOGO,
  DONT_HAVE_ACCOUNT,
  REGISTER,
  LOGIN,
  LOGIN_DESC,
  LOGIN_HEADER,
  FORGOT_PASSWORD,
} from "./constants";
import Design from "./Design";
import "./auth.scss";

const Login: FC = () => {
  const [error, setError] = useState<boolean | string>(false);
  return (
    <div>
      <div className="test">
        <div className="designs">
          <Design />
          <div className="login-auth">
            {error && (
              <div className="ui error message">
                <i onClick={() => setError(false)} className="close icon"></i>
                <div className="header">{LOGIN_ERROR_HEADER}</div>
                <p>{error}</p>
              </div>
            )}
            <h1 className="register-logo">{LOGO}</h1>
            <div className="login-container">
              <div className="login-header">
                <h2>{LOGIN_HEADER}</h2>
                <p>{LOGIN_DESC}</p>
              </div>
              <div>
                {LOGIN_FORM.map(({ label, className, type, placeholder }) => (
                  <div>
                    <label>{label}</label>
                    <div className={className}>
                      <input type={type} placeholder={placeholder} />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Link to="/verify-email">
                  <label className="forgot-password">{FORGOT_PASSWORD}</label>
                </Link>
              </div>
              <div className="auth-button">{LOGIN}</div>
              <div className="base">
                <p>
                  {DONT_HAVE_ACCOUNT} <Link to="/register">{REGISTER}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
