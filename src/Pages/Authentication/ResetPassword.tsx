import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  LOGIN_ERROR_HEADER,
  LOGO,
  RESET,
  RESET_FORM,
  RESET_DESC,
  RESET_HEADER,
  TRY_AGAIN,
  DIDNT_RECEIVE_CODE,
} from "./constants";
import Design from "./Design";
import "./auth.scss";

import "./auth.scss";

const ResetPassword: FC = () => {
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
                <h2>{RESET_HEADER}</h2>
                <p>{RESET_DESC}</p>
              </div>
              <div>
                {RESET_FORM.map(({ label, className, type, placeholder }) => (
                  <div>
                    <label>{label}</label>
                    <div className={className}>
                      <input type={type} placeholder={placeholder} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="auth-button">{RESET}</div>
              <div className="base">
                <p>
                  {DIDNT_RECEIVE_CODE}
                  <Link to="/verify-email"> {TRY_AGAIN}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
