import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { sendOtp } from "../redux";
import PinCode from "./PinCode";
import Success from "./Success";
import "./styles.scss";

const SendOtp = ({ data }: { data: string }) => {
  const [successOpen, setSucessOpen] = useState(false);
  const pay = useSelector((state: RootStateOrAny) => state.pay);
  const [otp, setOtp] = useState<string>("");
  const history = useHistory();
  const dispatch = useDispatch();

  const otpData = {
    otp: otp.toString(),
  };

  const handleOtp = () => {
    dispatch(sendOtp(otpData, setSucessOpen, history, data));
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
            <h2>OTP</h2>
            <div className="desc">
              Enter the otp sent to your phone or email address.
            </div>
          </div>
          <div className="flex-center">
            <PinCode setOtp={setOtp} />
          </div>
          <div>
            <button
              disabled={otp.length < 6 || pay.isPaymentLoading ? true : false}
              onClick={handleOtp}
              className="auth-button"
            >
              {pay.isPaymentLoading ? "Processing..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
      {successOpen && (
        <div id="show-modal-payment">
          <div className="modal-container">
            <div>
              <Success />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendOtp;
