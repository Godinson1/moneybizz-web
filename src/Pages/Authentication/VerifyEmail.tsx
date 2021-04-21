import React, { FC, useState } from "react";
import "./auth.scss";

const VerifyEmail: FC = () => {
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
              <h2>Verify Email</h2>
              <p>Securely verify email attached to your moneybizz account.</p>
            </div>
            <div>
              <label>Email</label>
              <div className="login-input">
                <input type="text" placeholder="Email address" />
              </div>
            </div>
            <div className="auth-button">Verify</div>
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

export default VerifyEmail;
