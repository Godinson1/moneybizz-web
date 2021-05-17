import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Message } from "semantic-ui-react";
import {
  VERIFY_ERROR_HEADER,
  LOGO,
  VERIFY_EMAIL,
  VERIFY_EMAIL_DESC,
  VERIFY,
  EMAIL,
} from "./constants";
import Design from "./Design";
import { validateVerifyEmail } from "../../utilities";
import { resetPassword } from "../../redux";
import "./auth.scss";

const VerifyEmail: FC = () => {
  const [errors, setError] = useState<boolean | string>(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [errors]);

  const handleVerifyEmail = () => {
    const { error, valid } = validateVerifyEmail({
      email,
    });
    if (!valid) {
      setLoading(false);
      setError(error);
    } else {
      const userData = {
        email,
      };
      dispatch(resetPassword(userData, setLoading, setError, history));
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
                  <Message.Header>{VERIFY_ERROR_HEADER}</Message.Header>
                  <p>{errors}</p>
                </Message>
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
                  <input
                    type="text"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  disabled={loading}
                  onClick={handleVerifyEmail}
                  className="auth-button"
                >
                  {loading ? "Verifying..." : VERIFY}
                </button>
              </div>
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
