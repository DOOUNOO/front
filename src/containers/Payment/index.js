import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/index";

import "./index.css";

const Payment = () => {
  const { state } = useLocation();
  const userData = state.userData;
  const expertData = state.expertData;

  return (
    <div className="payment-container">
      user: {userData.account.firstName}
      expert: {expertData.account.firstName}
    </div>
  );
};

export default Payment;
