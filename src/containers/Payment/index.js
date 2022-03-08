import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/index";
import "./index.scss";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const [paymentValidated, setPaymentValidated] = useState(false);

  const { state } = useLocation();
  try {
    const { userData, expertData, reservationTime } = state;
  } catch (error) {
    console.log(error);
    console.log(state);
  }

  return !state ? (
    <Navigate to="/login" />
  ) : !paymentValidated ? (
    <div className="payment-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          paymentValidated={paymentValidated}
          setPaymentValidated={setPaymentValidated}
        />
      </Elements>
    </div>
  ) : (
    <div className="payment-container">Payment validated info</div>
  );
};

export default Payment;
