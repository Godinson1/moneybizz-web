import React, { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import PaymentOption from "./PaymentOption";
import "./styles.scss";

const Save = () => {
  const [open, setOpen] = React.useState(true);
  const [secondOpen, setSecondOpen] = useState(false);
  const [amount, setAmount] = useState<string>("");
  const history = useHistory();

  return (
    <div>
      <Modal
        onClose={() => history.goBack()}
        onOpen={() => setOpen(true)}
        open={open}
        size="tiny"
        trigger={<Button>Show Modal</Button>}
      >
        <div className="modal-div">
          <div className="flex-between">
            <div>
              <h2>Quick Save</h2>
              <div className="desc">
                Enter an amount and a destination to save to.
              </div>
            </div>
            <div className="icon" onClick={() => history.goBack()}>
              <Icon name="cancel" />
            </div>
          </div>
          <div className="form-save">
            <label>Enter an Amount - E.g 5000</label>
            <div className="auth-input">
              <input
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="Enter Amount"
              />
            </div>
            <div>
              <button
                onClick={() => setSecondOpen(true)}
                className="auth-button"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size="tiny"
        >
          <PaymentOption amount={amount} setSecondOpen={setSecondOpen} />
        </Modal>
      </Modal>
    </div>
  );
};

export default Save;
