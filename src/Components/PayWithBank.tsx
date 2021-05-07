import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Dropdown, Icon, DropdownProps } from "semantic-ui-react";
import { bankOptions } from "./constants";
import { PaymentOptionProps } from "./types";
import { payWithBank } from "../redux";
import SendOtp from "./SendOtp";
import "./styles.scss";

const PayWithBank = ({ setOpen, amount }: PaymentOptionProps) => {
  const pay = useSelector((state: RootStateOrAny) => state.pay);
  const [code, setCode] = useState<string>("");
  const [otpOpen, setOtpOpen] = useState<boolean>(false);
  const [account_number, setAccountNumber] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setCode(data.value as string);
  };

  const payData = {
    code,
    account_number,
    amount,
  };

  const handlePayWithBank = () => {
    dispatch(payWithBank(payData, setOtpOpen));
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
              type="number"
              placeholder="Account Number"
            />
          </div>
          <label>Select Bank</label>
          <div className="drops">
            <Dropdown
              placeholder="Select Bank"
              fluid
              value={code}
              selection
              onChange={handleChange}
              options={bankOptions}
            />
          </div>
          <div>
            <button
              disabled={
                pay.isPaymentLoading ||
                code === "" ||
                account_number.length < 10
                  ? true
                  : false
              }
              onClick={handlePayWithBank}
              className="auth-button"
            >
              {pay.isPaymentLoading ? "Processing..." : "Pay"}
            </button>
          </div>
        </div>
      </div>
      {otpOpen && (
        <div id="show-modal-payment">
          <div className="modal-container">
            <div>
              <SendOtp />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayWithBank;
