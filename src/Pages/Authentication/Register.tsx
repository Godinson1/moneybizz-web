import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  REGISTER_FORM,
  REGISTER_ERROR_HEADER,
  LOGO,
  ALREADY_REGISTERED,
  REGISTER,
  LOGIN,
  REGISTER_DESC,
  REGISTER_HEADER,
} from "./constants";
import Design from "./Design";
import "./auth.scss";

const Register: FC = () => {
  const [error, setError] = useState<boolean | string>(false);

  return (
    <div>
      <div className="test">
        <div className="designs">
          <Design />
          <div className="container-auth">
            {error && (
              <div className="ui error message">
                <i onClick={() => setError(false)} className="close icon"></i>
                <div className="header">{REGISTER_ERROR_HEADER}</div>
                <p>{error}</p>
              </div>
            )}
            <h1 className="register-logo">{LOGO}</h1>
            <div className="login-container">
              <div className="login-header">
                <h2>{REGISTER_HEADER}</h2>
                <p>{REGISTER_DESC}</p>
              </div>
              <div>
                {REGISTER_FORM.map(
                  ({ label, className, type, placeholder }) => (
                    <div>
                      <label>{label}</label>
                      <div className={className}>
                        <input type={type} placeholder={placeholder} />
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="auth-button">{REGISTER}</div>
              <div className="base">
                <p>
                  {ALREADY_REGISTERED} <Link to="/login">{LOGIN}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
