import React, { useEffect, useState } from "react";
import { Icon, Dropdown, DropdownProps } from "semantic-ui-react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { getDuration } from "./helper";
import { SAFELOCK_OPTIONS, fundsOptions } from "./constants";
import "./styles.scss";
import "../../styles.scss";

const Lock = () => {
  const [account_number, setAccountNumber] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setCode(data.value as string);
    console.log(account_number);
  };

  const history = useHistory();
  const { url } = useRouteMatch();
  console.log(url.slice(-5));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <div>
      <div className="modal-div-pay">
        <div className="flex-between">
          <div></div>
          <div className="icon" onClick={() => history.goBack()}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="info-header">
            <h2>Lock for {getDuration(url)} days</h2>
            <div className="desc">
              Create a SafeLock for just {getDuration(url)} days.
            </div>
          </div>
          <div className="safelockinfo-container">
            <label>Amount to Lock / Invest</label>
            <div className="auth-input">
              <input
                onChange={(e) => setAccountNumber(e.target.value)}
                type="number"
                placeholder="50000"
              />
            </div>
            <label>Title of SafeLock™</label>
            <div className="auth-input">
              <input
                onChange={(e) => setAccountNumber(e.target.value)}
                type="number"
                placeholder="My New Lock"
              />
            </div>
            <label>Set Payback Date</label>
            <div className="drops">
              <Dropdown
                placeholder="Pick a Date"
                fluid
                value={code}
                selection
                onChange={handleChange}
                options={SAFELOCK_OPTIONS}
              />
            </div>
            <label>Source of Funds</label>
            <div className="drops">
              <Dropdown
                placeholder="Select a Funding Source"
                fluid
                value={code}
                selection
                onChange={handleChange}
                options={fundsOptions}
              />
            </div>
            <div>
              <button onClick={() => history.goBack()} className="auth-button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lock;
