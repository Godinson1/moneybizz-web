import React, { useEffect, useState } from "react";
import { Icon, DropdownProps, Dropdown } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { saveOptions } from "./constants";

import "./styles.scss";

const FinishAutoSaveSettings = () => {
  const [code, setCode] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [finish, setFinish] = useState<boolean>(false);

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setCode(data.value as string);
  };
  const history = useHistory();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
            <h2>Finish Settings</h2>
            <div className="desc">Complete your autosave settings.</div>
          </div>
          <div className="content">
            <div className="autosave-banner">
              <div>
                <Icon size="big" name="calendar" />
              </div>
              <div>
                <h4>₦2,000 weekly</h4>
                <div className="base">Continue your settings below.</div>
              </div>
            </div>
            <label>Day of the week</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Interval"
                fluid
                value={code}
                selection
                onChange={handleChange}
                options={saveOptions}
              />
            </div>
            <label>Preferred Time</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Time"
                fluid
                value={code}
                selection
                onChange={handleChange}
                options={saveOptions}
              />
            </div>
            <label>Where should funds come from?</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Source"
                fluid
                value={code}
                selection
                onChange={handleChange}
                options={saveOptions}
              />
            </div>
            <label>When do you want to start?</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Start Time"
                fluid
                value={code}
                selection
                onChange={handleChange}
                options={saveOptions}
              />
            </div>
          </div>
          <div className="bottom-card">
            <button onClick={() => history.goBack()} className="auth-button">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishAutoSaveSettings;
