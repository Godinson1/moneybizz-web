import React from "react";
import PinInput from "react-pin-input";

const PinCode = ({ setOtp }: { setOtp: Function }) => {
  return (
    <div>
      <PinInput
        length={6}
        initialValue=""
        secret
        onChange={(value, index) => {
          console.log(value);
        }}
        type="numeric"
        inputMode="number"
        style={{ padding: "10px", fontSize: "2rem" }}
        inputStyle={{ borderColor: "blue" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value, index) => setOtp(value)}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
    </div>
  );
};

export default PinCode;
