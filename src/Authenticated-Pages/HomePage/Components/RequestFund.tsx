import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const RequestFund = () => {
  const [handle, setHandle] = useState<string>("");
  const [title, setTitle] = useState<string>("");
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
          <div></div>
          <div className="icon" onClick={() => history.goBack()}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="info-header">
            <h2>Request Fund.</h2>
            <div className="desc">
              Still in development. Kindly check back later!
            </div>
          </div>
          <div>
            <label>Amount</label>
            <div className="auth-input">
              <input
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                value={amount}
                placeholder="50000"
              />
            </div>
            <label>Bizzer handle</label>
            <div className="auth-input">
              <input
                onChange={(e) => setHandle(e.target.value)}
                type="text"
                value={handle}
                placeholder="mypaddi"
              />
            </div>
            <label>Message</label>
            <div className="auth-input">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="textarea"
                value={title}
                placeholder="Abeg! find me small 2k make I take dey.."
              />
            </div>
          </div>
          <div>
            <button onClick={() => history.goBack()} className="auth-button">
              Request Fund
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFund;
