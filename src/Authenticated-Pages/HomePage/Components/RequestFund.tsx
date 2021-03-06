import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import NumberFormat from "react-number-format";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { requestFund } from "../../../redux";

const RequestFund = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [handle, setHandle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleRequestFund = () => {
    const requestData = {
      handle,
      amount: amount + "00",
      message,
    };
    dispatch(requestFund(requestData, history));
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
            <h2>Request Fund.</h2>
            <div className="desc">Request fund from fellow money bizzer</div>
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
                placeholder="Abeg! find me small 2k make I take dey.."
              />
            </div>
          </div>
          <div>
            <button
              disabled={user.isLoading || amount === "" || handle === ""}
              onClick={handleRequestFund}
              className="auth-button"
            >
              {user.isLoading ? "Requesting..." : " Request Fund"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFund;
