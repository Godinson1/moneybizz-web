import React from "react";
import { Modal, Icon } from "semantic-ui-react";
import { usePaystackPayment } from "react-paystack";
import PayWithBank from "./PayWithBank";
import "./styles.scss";

type PaymentOptionProps = {
  setSecondOpen: Function;
  amount: string;
};

const config = {
  reference: `${new Date().getTime()}`,
  email: "user@example.com",
  amount: 200000,
  publicKey: "pk_test_a8b5af7abc7694ab53d6896b7a9f70753acdcb36",
};

const onSuccess = (reference: string | undefined) => {
  console.log(reference);
};

const onClose = () => {
  console.log("closed");
};

const PaymentOption = ({ setSecondOpen, amount }: PaymentOptionProps) => {
  const [open, setOpen] = React.useState(false);

  const initializePayment = usePaystackPayment(config);

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
          <div className="auth-options">
            <Icon size="small" id="icon" name="credit card outline" />
            <div>Pay with Existing Card</div>
          </div>
        </div>
      </div>
      <Modal onClose={() => setSecondOpen(false)} open={open} size="tiny">
        <PayWithBank amount={amount} setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default PaymentOption;
