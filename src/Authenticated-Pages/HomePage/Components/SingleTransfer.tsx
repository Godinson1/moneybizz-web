import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import NumberFormat from "react-number-format";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { singleTransfer } from "../../../redux";

const SingleTransfer = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [handle, setHandle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  const handleRequestFund = () => {
    const requestData = {
      handle,
      amount: amount + "00",
      reason: message,
    };
    dispatch(singleTransfer(requestData, history));
  };

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
            <h2>Send Bizzer Fund.</h2>
            <div className="desc">
              Transfer fund from wallet to bizzer's wallet with ease.
            </div>
          </div>
          <div>
            <label>Amount</label>
            <div className="auth-input">
              <NumberFormat
                placeholder="5000"
                thousandSeparator={true}
                onValueChange={({ formattedValue, value }) => setAmount(value)}
                prefix={"₦"}
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
            <div className="auth-inpust">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="textarea-request"
                placeholder="Use this one take manage.."
              />
            </div>
          </div>
          <div>
            <button
              disabled={user.isLoading || amount === "" || handle === ""}
              onClick={handleRequestFund}
              className="auth-button"
            >
              {user.isLoading ? "Processing..." : " Send Fund"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTransfer;
