import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Message } from "semantic-ui-react";
import {
  LOGIN_FORM,
  LOGIN_ERROR_HEADER,
  LOGO,
  DONT_HAVE_ACCOUNT,
  REGISTER,
  LOGIN,
  LOGIN_DESC,
  LOGIN_HEADER,
  FORGOT_PASSWORD,
} from "./constants";
import { loginUser } from "../../redux/";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import { validateLogin } from "../../utilities";
import Design from "./Design";
import "./auth.scss";

const Login: FC = () => {
  const [errors, setError] = useState<boolean | string>(false);
  const [data, setData] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [errors]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "data") setData(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const login = () => {
    const { error, valid } = validateLogin({ data, password });
    if (!valid) {
      setLoading(false);
      setError(error);
    } else {
      const userData = {
        data,
        password,
      };
      dispatch(loginUser(userData, setLoading, setError, history));
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
                  <Message.Header>{LOGIN_ERROR_HEADER}</Message.Header>
                  <p>{errors}</p>
                </Message>
              </div>
            )}
            <h1 className="register-logo">{LOGO}</h1>
            <div className="login-container">
              <div className="login-header">
                <h2>{LOGIN_HEADER}</h2>
                <p>{LOGIN_DESC}</p>
              </div>
              <div>
                {LOGIN_FORM.map(
                  ({ label, name, className, type, placeholder }) => (
                    <div>
                      <label>{label}</label>
                      <div className={className}>
                        <input
                          onChange={handleOnChange}
                          type={type}
                          name={name}
                          placeholder={placeholder}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <div>
                <Link to="/verify-email">
                  <label className="forgot-password">{FORGOT_PASSWORD}</label>
                </Link>
              </div>
              <div>
                <button
                  disabled={loading}
                  onClick={login}
                  className="auth-button"
                >
                  {loading ? <PreloaderMain /> : LOGIN}
                </button>
              </div>
              <div className="base">
                <p>
                  {DONT_HAVE_ACCOUNT} <Link to="/register">{REGISTER}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
