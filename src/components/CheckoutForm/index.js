import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

// NEEDS TO BE UPDATED WITH PROPER INFO

const CheckoutForm = ({ owner_id, title }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const stripeResponse = await stripe.createToken(cardElement, {
      name: owner_id,
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: title,
        amount: 1,
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <div className="card-form-section">
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <div>
            <CardElement />
          </div>
          <button type="submit">Pay</button>
        </form>
      ) : (
        <span style={{ color: "darkgreen", fontWeight: "bold" }}>
          Paiement effectué !{" "}
        </span>
      )}
    </div>
  );
};

export default CheckoutForm;
