import React, { FC, useState } from "react";
import "./auth.scss";

const Activate: FC = () => {
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
              <h2>Activate Account</h2>
              <p>
                Enter bizz activation code sent to your email to continue the
                bizzer experience.
              </p>
            </div>
            <div>
              <label>Activation Code</label>
              <div className="login-input">
                <input type="text" />
              </div>
            </div>
            <div className="auth-button">Activate</div>
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

export default Activate;
