import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Icon, Dropdown, DropdownProps } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import dayjs from "dayjs";
import VerifyOtp from "./VerifyOtp";
import { SEX_OPTIONS } from "../constants";
import { useHistory, Route, useRouteMatch } from "react-router-dom";
import { verifyUser } from "../../../redux";

const AddBVN = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [stateOrigin, setStateOrigin] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [sex, setSex] = useState<string>("");
  const dispatch = useDispatch();
  const { url } = useRouteMatch();

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setSex(data.value as string);
  };

  const history = useHistory();

  const onChange = (
    event: React.SyntheticEvent<Element, Event> | undefined,
    data: any
  ) => setDateOfBirth(dayjs(data.value).format("YYYY-MM-DD"));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVerify = () => {
    const verifyData = {
      phone,
      address,
      stateOrigin,
      dateOfBirth,
      sex,
    };
    dispatch(verifyUser(verifyData, history, url));
  };

  return (
    <div>
      <div className="modal-div">
        <div className="flex-between">
          <div></div>
          <div className="icon" onClick={() => history.goBack()}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="info-header">
            <h2>Verify your Identity.</h2>
            <div className="desc">
              Use your active phone number and provide the rest information to
              verify identity and help us secure your account.
            </div>
          </div>
          <div className="bvn-content">
            <label>Phone number</label>
            <div className="auth-input">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="09088374773"
              />
            </div>
            <label>Date of Birth</label>
            <div className="dateOfBirth">
              <SemanticDatepicker
                size="big"
                id="dateOfBirth"
                onChange={onChange}
              />
            </div>
            <label>Residential Address</label>
            <div className="auth-input">
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="12b moneybizzz street."
              />
            </div>
            <label>State of Origin</label>
            <div className="auth-input">
              <input
                onChange={(e) => setStateOrigin(e.target.value)}
                type="text"
                placeholder="Lagos"
              />
            </div>
            <label>Select Sex</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Sex"
                fluid
                value={sex}
                selection
                onChange={handleChange}
                options={SEX_OPTIONS}
              />
            </div>
            <div>
              <button
                disabled={user.isLoading}
                onClick={handleVerify}
                className="auth-button"
              >
                {user.isLoading ? "Verifying..." : "Verify"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Route
        path={`${url}/otp`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-payment">
                  <div className="modal-container">
                    <div>
                      <VerifyOtp url={url} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default AddBVN;
