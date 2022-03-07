import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/index";
import "./index.css";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const { state } = useLocation();
  try {
    const { userData, expertData } = state;
  } catch (error) {
    console.log(error);
    console.log(state);
  }

  return !state ? <Navigate to="/login" /> : <div>PAYMENT STUFF</div>;
};

export default Payment;
