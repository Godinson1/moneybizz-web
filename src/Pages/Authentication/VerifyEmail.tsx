import React, { FC, useState } from "react";
import {
  LOGIN_ERROR_HEADER,
  LOGO,
  VERIFY_EMAIL,
  VERIFY_EMAIL_DESC,
  VERIFY,
  EMAIL,
} from "./constants";
import Design from "./Design";
import "./auth.scss";

const VerifyEmail: FC = () => {
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
                <h2>{VERIFY_EMAIL}</h2>
                <p>{VERIFY_EMAIL_DESC}</p>
              </div>
              <div>
                <label>{EMAIL}</label>
                <div className="auth-input">
                  <input type="text" placeholder="Email address" />
                </div>
              </div>
              <div className="auth-button">{VERIFY}</div>
            </div>
          </div>
          <div className="flex-between">
            <div className="ring-three"></div>
            <div className="ring-four"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
