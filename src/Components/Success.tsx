import React from "react";
import "./styles.scss";

const Success = () => {
  return (
    <div>
      <div className="modal-div">
        <div className="flex-center">
          <div>
            <h2>Payment Successful!</h2>
          </div>
          <div className="form-save">
            <img width="350" height="250" src="/images/suc.png" alt="success" />
          </div>
          <div className="desc">Ooin, You are doing well &#128526;.</div>
        </div>
      </div>
    </div>
  );
};

export default Success;
