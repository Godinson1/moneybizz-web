import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  LOGIN_ERROR_HEADER,
  LOGO,
  ACTIVATE,
  ACTIVATE_DESC,
  ACTIVATE_HEADER,
  DIDNT_RECEIVE_CODE,
  ACTIVATION_CODE,
  TRY_AGAIN,
} from "./constants";
import Design from "./Design";
import "./auth.scss";

const Activate: FC = () => {
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
                <h2>{ACTIVATE_HEADER}</h2>
                <p>{ACTIVATE_DESC}</p>
              </div>
              <div>
                <label>{ACTIVATION_CODE}</label>
                <div className="auth-input">
                  <input type="text" />
                </div>
              </div>
              <div className="auth-button">{ACTIVATE}</div>
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

export default Activate;
