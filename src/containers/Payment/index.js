import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/index";
import "./index.css";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const { state } = useLocation();
  const { userData, expertData } = state;

  return (
    <div className="payment-container">
      user: {userData.account.firstName}
      expert: {expertData.account.firstName}
    </div>
  );
};

export default Payment;
