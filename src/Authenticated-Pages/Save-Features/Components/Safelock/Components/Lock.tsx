import React, { useEffect, useState } from "react";
import { Icon, Dropdown, DropdownProps } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { useHistory, useRouteMatch } from "react-router-dom";
import NumberFormat from "react-number-format";
import dayjs from "dayjs";
import { getDuration, getInterest } from "./helper";
import { fundsOptions } from "./constants";
import "./styles.scss";
import "../../styles.scss";

const Lock = () => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [payBackDate, setPayBackDate] = useState("");

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setCode(data.value as string);
  };

  const onChange = (
    event: React.SyntheticEvent<Element, Event> | undefined,
    data: any
  ) => setPayBackDate(dayjs(data.value).format("YYYY-MM-DD"));

  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  const handleSafelock = () => {
    const safelockData = {
      title,
      amount,
      payBackDate,
      interest: getInterest(url),
    };
    console.log(safelockData);
    history.goBack();
  };

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
              Create a SafeLock for just {getDuration(url)} days. Still in
              development, kindly check back later.
            </div>
          </div>
          <div>
            <label>Amount to Lock / Invest</label>
            <div className="auth-input">
              <NumberFormat
                placeholder="5000"
                thousandSeparator={true}
                onValueChange={({ formattedValue, value }) => setAmount(value)}
                prefix={"₦"}
              />
            </div>
            <label>Title of SafeLock™</label>
            <div className="auth-input">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder="My New Lock"
              />
            </div>
            <label>Set Payback Date</label>
            <div className="dateOfBirth">
              <SemanticDatepicker
                size="big"
                id="dateOfBirth-lock"
                onChange={onChange}
                minDate={new Date()}
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
              <button
                disabled={amount === "" || payBackDate === ""}
                onClick={handleSafelock}
                className="auth-button"
              >
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
