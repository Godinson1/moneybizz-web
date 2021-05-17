import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Message } from "semantic-ui-react";
import {
  ACTIVATE_ERROR_HEADER,
  LOGO,
  ACTIVATE,
  ACTIVATE_DESC,
  ACTIVATE_HEADER,
  DIDNT_RECEIVE_CODE,
  ACTIVATION_CODE,
  TRY_AGAIN,
} from "./constants";
import Design from "./Design";
import { activateUser } from "../../redux";
import "./auth.scss";

const Activate: FC = () => {
  const [errors, setError] = useState<boolean | string>(false);
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [errors]);

  const handleActivateUser = () => {
    if (!code) {
      setLoading(false);
      setError("Code cannot be empty!");
    } else {
      const userData = {
        code,
      };
      dispatch(activateUser(userData, setLoading, setError, history));
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
                  <Message.Header>{ACTIVATE_ERROR_HEADER}</Message.Header>
                  <p>{errors}</p>
                </Message>
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
                  <input
                    type="text"
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  disabled={loading}
                  onClick={handleActivateUser}
                  className="auth-button"
                >
                  {loading ? "Activating..." : ACTIVATE}
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

export default Activate;
