import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router-dom";
import { getUserDetail } from "../redux";

const usePayWithCard = (data: string, amount: string) => {
  const user = useSelector((state: RootStateOrAny) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const config = {
    reference: `${new Date().getTime()}`,
    email: `${user && user.data && user.data.details.email}`,
    amount: parseInt(amount + "00"),
    publicKey: `${user && user.data && user.data.secret}`,
  };

  const onSuccess = () => {
    if (data === "home") {
      history.push("/home");
    } else if (data === "save") {
      history.push("/save");
    }
    dispatch(getUserDetail());
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  return initializePayment(onSuccess, onClose);
};

export default usePayWithCard;
