import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Message } from "semantic-ui-react";
import {
  REGISTER_FORM,
  REGISTER_ERROR_HEADER,
  LOGO,
  ALREADY_REGISTERED,
  REGISTER,
  LOGIN,
  REGISTER_DESC,
  REGISTER_HEADER,
} from "./constants";
import Design from "./Design";
import { registerUser } from "../../redux/";
//import PreloaderMain from "../../Components/preloader/PreloaderMain";
import { validateReg } from "../../utilities";
import "./auth.scss";

const Register: FC = () => {
  const [errors, setError] = useState<boolean | string>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [handle, setHandle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //const [message, setMessage] = useState<string>("");
  //const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [errors]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    if (e.target.name === "firstname") setFirstName(e.target.value);
    if (e.target.name === "lastname") setLastName(e.target.value);
    if (e.target.name === "handle") setHandle(e.target.value);
  };

  const register = () => {
    const { error, valid } = validateReg({
      firstName,
      lastName,
      email,
      handle,
      password,
    });
    if (!valid) {
      setLoading(false);
      setError(error);
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        handle,
        password,
      };
      dispatch(registerUser(userData, setLoading, setError, history));
    }
  };

  return (
    <div>
      <div className="test">
        <div className="designs">
          <Design />
          <div className="container-auth">
            {errors && (
              <div className="message-auth">
                <Message negative>
                  <Message.Header>{REGISTER_ERROR_HEADER}</Message.Header>
                  <p>{errors}</p>
                </Message>
              </div>
            )}
            <h1 className="register-logo">{LOGO}</h1>
            <div className="login-container">
              <div className="login-header">
                <h2>{REGISTER_HEADER}</h2>
                <p>{REGISTER_DESC}</p>
              </div>
              <div>
                {REGISTER_FORM.map(
                  ({ label, name, className, type, placeholder }) => (
                    <div>
                      <label>{label}</label>
                      <div className={className}>
                        <input
                          name={name}
                          onChange={handleOnChange}
                          type={type}
                          placeholder={placeholder}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <div>
                <button
                  disabled={loading}
                  onClick={register}
                  className="auth-button"
                >
                  {loading ? "Loading..." : REGISTER}
                </button>
                {loading && <p className="load-base">Please wait...</p>}
              </div>
              <div className="base">
                <p>
                  {ALREADY_REGISTERED} <Link to="/login">{LOGIN}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
