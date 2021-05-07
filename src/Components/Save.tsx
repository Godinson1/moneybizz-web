import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import PaymentOption from "./PaymentOption";
import "./styles.scss";

const Save = () => {
  const [secondOpen, setSecondOpen] = useState(false);
  const [amount, setAmount] = useState<string>("");
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
          <div>
            <h2>Quick Save</h2>
            <div className="desc">
              Enter an amount and proceed to desired payment option.
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
              disabled={amount.length < 2 ? true : false}
              onClick={() => setSecondOpen(true)}
              className="auth-button"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
      {secondOpen && (
        <div id="show-modal-payment">
          <div className="modal-container">
            <div>
              <PaymentOption amount={amount} setSecondOpen={setSecondOpen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Save;
