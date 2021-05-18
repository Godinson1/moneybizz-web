import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Icon, DropdownProps, Dropdown } from "semantic-ui-react";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";
import { saveOptions } from "./constants";
import FinishAutoSaveSettings from "./FinishAutoSaveSettings";

import "./styles.scss";

const AutoSave_Settings = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [code, setCode] = useState<string>(
    user.user && user.user.data && user.user.data.details.autoSave.interval
  );
  const [amount, setAmount] = useState<string>(
    user.user &&
      user.user.data &&
      user.user.data.details.autoSave.amount.toString().slice(0, -2)
  );
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
            <h2>AutoSave Settings</h2>
            <div className="desc">
              Automate your saving with AutoSave. Control how you want to save
              into your BizzyBank wallet.
            </div>
          </div>
          <label>How will you prefer to save?</label>
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
          <label>Amount to save per time</label>
          <div className="auth-input">
            <NumberFormat
              placeholder="ie. 5000"
              thousandSeparator={true}
              onValueChange={({ formattedValue, value }) => setAmount(value)}
              prefix={"₦"}
              value={amount}
            />
          </div>
          <div>
            <button
              disabled={
                (amount && code && amount.length < 3) || code === ""
                  ? true
                  : false
              }
              onClick={() => setFinish(true)}
              className="auth-button"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      {finish && (
        <div id="show-modal-payment">
          <div className="modal-container">
            <div>
              <FinishAutoSaveSettings
                amount={amount}
                code={code}
                setFinish={setFinish}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoSave_Settings;
