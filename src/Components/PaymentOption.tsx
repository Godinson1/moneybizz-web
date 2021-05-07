import React, { useState } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { usePaystackPayment } from "react-paystack";
import { getUserDetail } from "../redux";
import PayWithBank from "./PayWithBank";
import "./styles.scss";
import { useHistory } from "react-router-dom";

type PaymentOptionProps = {
  setSecondOpen: Function;
  amount: string;
};

const PaymentOption = ({ setSecondOpen, amount }: PaymentOptionProps) => {
  const user = useSelector((state: RootStateOrAny) => state.user.user);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const config = {
    reference: `${new Date().getTime()}`,
    email: `${user && user.data && user.data.details.email}`,
    amount: parseInt(amount + "00"),
    publicKey: `${user && user.data && user.data.secret}`,
  };
  const initializePayment = usePaystackPayment(config);

  const onSuccess = (data: string | undefined) => {
    history.push("/home");
    dispatch(getUserDetail());
  };

  const onClose = () => {
    console.log("closed");
  };

  return (
    <div>
      <div className="modal-div-pay">
        <div className="flex-between">
          <div>
            <h2>Payment Options</h2>
            <div className="desc">
              Select any of the options below to quick save immediately.
            </div>
          </div>
          <div className="icon" onClick={() => setSecondOpen(false)}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="auth-options" onClick={() => setOpen(true)}>
            <Icon size="small" id="icon" name="block layout" />
            <div>Pay with Bank</div>
          </div>
          <div
            className="auth-options"
            onClick={() => initializePayment(onSuccess, onClose)}
          >
            <Icon size="small" id="icon" name="cc mastercard" />
            <div>Use new Card</div>
          </div>
          {user && user.data && (
            <div className="auth-options">
              <Icon size="small" id="icon" name="credit card outline" />
              <div>Pay with bank card **** **3453</div>
            </div>
          )}
        </div>
      </div>
      {open && (
        <div id="show-modal-payment">
          <div className="modal-container">
            <div>
              <PayWithBank amount={amount} setOpen={setOpen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOption;
