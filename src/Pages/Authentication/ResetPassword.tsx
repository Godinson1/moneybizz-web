import React, { FC, useState } from "react";
import "./auth.scss";

const ResetPassword: FC = () => {
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
              <h2>Reset Password</h2>
              <p>
                Use activation code sent to your email and enter new password.
              </p>
            </div>
            <div>
              <label>Bizz Code</label>
              <div className="login-input">
                <input type="text" placeholder="Bizz Code" />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div className="login-input">
                <input type="text" placeholder="Password" />
              </div>
            </div>
            <div>
              <label>Confirm Password</label>
              <div className="login-input">
                <input type="text" placeholder="Confirm Password" />
              </div>
            </div>
            <div className="auth-button">Reset</div>
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

export default ResetPassword;
