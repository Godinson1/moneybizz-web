import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Message } from "semantic-ui-react";
import {
  RESET_ERROR_HEADER,
  LOGO,
  RESET,
  RESET_FORM,
  RESET_DESC,
  RESET_HEADER,
  TRY_AGAIN,
  DIDNT_RECEIVE_CODE,
} from "./constants";
import Design from "./Design";
import { validateResetPassword } from "../../utilities";
import { createNewPassword } from "../../redux";

import "./auth.scss";

const ResetPassword: FC = () => {
  const [errors, setError] = useState<boolean | string>(false);
  const [mbCode, setMbCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [errors]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "mbCode") setMbCode(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    if (e.target.name === "confirmPassword") setConfirmPassword(e.target.value);
  };

  const handleResetPassword = () => {
    const { error, valid } = validateResetPassword({
      mbCode,
      confirmPassword,
      password,
    });
    if (!valid) {
      setLoading(false);
      setError(error);
    } else {
      const userData = {
        mbCode,
        password,
      };
      dispatch(createNewPassword(userData, setLoading, setError, history));
    }
  };

  return (
    <div>
      <div className="test">
        <div className="designs">
          <Design />
          <div className="login-auth">
            {errors && (
              <div className="message-auth">
                <Message negative>
                  <Message.Header>{RESET_ERROR_HEADER}</Message.Header>
                  <p>{errors}</p>
                </Message>
              </div>
            )}
            <h1 className="register-logo">{LOGO}</h1>
            <div className="login-container">
              <div className="login-header">
                <h2>{RESET_HEADER}</h2>
                <p>{RESET_DESC}</p>
              </div>
              <div>
                {RESET_FORM.map(
                  ({ label, className, type, placeholder, name }) => (
                    <div key={name}>
                      <label>{label}</label>
                      <div className={className}>
                        <input
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <div>
                <button
                  disabled={loading}
                  onClick={handleResetPassword}
                  className="auth-button"
                >
                  {loading ? "Resetting..." : RESET}
                </button>
              </div>
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
