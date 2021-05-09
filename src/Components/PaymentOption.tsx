import React, { useState } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";
import { usePaystackPayment } from "react-paystack";
import { getUserDetail } from "../redux";
import PayWithBank from "./PayWithBank";
import { PaymentOptionProps } from "./types";
import PayWithExistingCard from "./PayWithExistingCard";
import "./styles.scss";
import { useHistory } from "react-router-dom";

const PaymentOption = ({ setOpen, amount, data }: PaymentOptionProps) => {
  const user = useSelector((state: RootStateOrAny) => state.user.user);
  const [opens, setOpens] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const config = {
    reference: `${new Date().getTime()}`,
    email: `${user && user.data && user.data.details.email}`,
    amount: parseInt(amount + "00"),
    publicKey: `${user && user.data && user.data.secret}`,
  };
  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    if (data === "home") {
      history.push("/home");
    } else if (data === "save") {
      history.push("/save");
    }
    dispatch(getUserDetail());
  };

  const onClose = () => {
    console.log("closed");
  };

  return (
    <div>
      <div className="modal-div-pay">
        <div className="flex-between">
          <div></div>
          <div className="icon" onClick={() => setOpen(false)}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="info-header">
            <h2>Payment Options</h2>
            <div className="desc">
              Select any of the options below to quick save immediately.
            </div>
          </div>
          <div className="auth-options" onClick={() => setOpens(true)}>
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
          {user && user.data && user.data.details.authorization.length > 0 && (
            <div className="auth-options">
              <Icon size="small" id="icon" name="credit card outline" />
              <div onClick={() => setModalOpen(true)}>
                Pay with bank card **** **** {""}
                {user.data.details.authorization[0].last4}
              </div>
            </div>
          )}
        </div>
      </div>
      {opens && (
        <div id="show-modal-payment">
          <div className="modal-container">
            <div>
              <PayWithBank data={data} amount={amount} setOpen={setOpens} />
            </div>
          </div>
        </div>
      )}
      {modalOpen && (
        <div id="show-modal-payment">
          <div className="modal-container">
            <PayWithExistingCard
              data={data}
              setModalOpen={setModalOpen}
              amount={amount}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOption;
