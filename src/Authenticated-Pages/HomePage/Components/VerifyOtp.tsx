import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { verifyUserOtp } from "../../../redux";
import PinCode from "../../../Components/PinCode";

const VerifyOtp = ({ url }: { url: string }) => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [otp, setOtp] = useState<number>(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const otpData = {
    otp: otp,
  };

  const handleOtp = () => {
    dispatch(verifyUserOtp(otpData, history));
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
              Enter the otp sent to your phone to fully confirm verification.
            </div>
          </div>
          <div className="flex-center">
            <PinCode setOtp={setOtp} />
          </div>
          <div>
            <button
              disabled={otp < 6 || user.isLoading ? true : false}
              onClick={handleOtp}
              className="auth-button"
            >
              {user.isLoading ? "Processing..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
