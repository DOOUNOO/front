import { useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/index";
import "./index.scss";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const [paymentValidated, setPaymentValidated] = useState(false);

  const { state } = useLocation();
  try {
    // The data below should be used at a later point to create appointment data for the dashboard
    // const { userData, expertData, reservationTime } = state;
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
    <div className="payment-container">
      <img
        src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646671878/Doounoo/pixlr-bg-result_2_l5ymkm.png"
        alt="certified-icon"
      />
      <h1>Votre rendez-vous a été réservé !</h1>
    </div>
  );
};

export default Payment;
