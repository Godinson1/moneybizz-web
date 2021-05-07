import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { payWithExistingCard } from "../redux";
import { formatNumber } from "../utilities";
import Success from "./Success";
import { Icon } from "semantic-ui-react";

type ExistingCardType = {
  setModalOpen: Function;
  amount: string;
};

const PayWithExistingCard = ({ setModalOpen, amount }: ExistingCardType) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const pay = useSelector((state: RootStateOrAny) => state.pay);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePayWithExistingCard = () => {
    const payData = {
      amount: amount + "00",
    };
    dispatch(payWithExistingCard(payData, setOpenSuccess, history));
  };

  return (
    <div>
      <div>
        <div className="modal-div">
          <div className="flex-between">
            <div></div>
            <div className="icon" onClick={() => setModalOpen(false)}>
              <Icon name="cancel" />
            </div>
          </div>
          <div className="form-save">
            <div className="info-header">
              <h2>Pay with Debit Card</h2>
              <div className="desc">
                You are about to pay {formatNumber(parseInt(amount))} using the
                selected payment method.
              </div>
            </div>
            <div className="flex-buttons">
              <div>
                <button
                  onClick={handlePayWithExistingCard}
                  className="auth-button"
                >
                  {pay.isPaymentLoading ? "Processing..." : "Confirm"}
                </button>
              </div>
              <div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="auth-button cancels"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openSuccess && (
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

export default PayWithExistingCard;
