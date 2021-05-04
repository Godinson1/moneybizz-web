import React from "react";
import { useState } from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { createKeywordTypeNode } from "typescript";
import "./styles.scss";

type PaymentOptionProps = {
  setOpen: Function;
  amount: string;
};

const friendOptions = [
  {
    key: "Zenith Bank",
    text: "Zenith Bank",
    value: "057",
  },
  {
    key: "UBA",
    text: "UBA",
    value: "033",
  },
  {
    key: "Wema Bank",
    text: "Wema Bank",
    value: "035",
  },
];

const PayWithBank = ({ setOpen, amount }: PaymentOptionProps) => {
  const [code, setCode] = useState<string>("");
  const [account_number, setAccountNumber] = useState<string>("");

  const handleDropdown = (value: any) => {
    console.log(value.target.innerTexxt);
  };

  const payData = {
    code,
    account_number,
    amount,
  };

  return (
    <div>
      <div className="modal-div-pay">
        <div className="flex-between">
          <div>
            <h2>Pay With Bank</h2>
            <div className="desc">
              Enter account number and select desired bank.
            </div>
          </div>
          <div className="icon" onClick={() => setOpen(false)}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <label>Enter Account Number</label>
          <div className="auth-input">
            <input
              onChange={(e) => setAccountNumber(e.target.value)}
              type="text"
              placeholder="Enter Amount"
            />
          </div>
          <label>Select Bank</label>
          <div className="drops">
            <Dropdown
              placeholder="Select Bank"
              fluid
              selection
              onChange={handleDropdown}
              options={friendOptions}
            />
          </div>
          <div>
            <button className="auth-button">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayWithBank;
