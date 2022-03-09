import { CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./index.scss";

const CheckoutForm = ({ paymentValidated, setPaymentValidated }) => {
  const [paypal, setPaypal] = useState(false);
  const [creditcard, setCreditcard] = useState(true);
  const [name, setName] = useState();
  const [missingInfo, setMissingInfo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name) {
      setPaymentValidated(true);
    } else {
      setMissingInfo(true);
    }
  };

  return (
    <div className="checkout-container">
      {!paymentValidated ? (
        <>
          <h1>Méthode de paiement</h1>
          <div className="payment-row paypal-row">
            <input
              type="radio"
              checked={paypal}
              onChange={() => {
                setPaypal(true);
                setCreditcard(false);
              }}
            />
            <div>Paypal</div>{" "}
            <img
              src="https://res.cloudinary.com/dxdxmd9mf/image/upload/v1646748838/doounoo/paypal-logo.png"
              alt="paypal-logo"
              className="payment-logo"
            />
          </div>
          <div className="payment-row">
            <input
              type="radio"
              checked={creditcard}
              onChange={() => {
                setPaypal(false);
                setCreditcard(true);
              }}
            />{" "}
            <div>Carte de crédit</div>
            <div className="payment-logo-row">
              <img
                src="https://res.cloudinary.com/dxdxmd9mf/image/upload/v1646748823/doounoo/cb-logo.png"
                alt="cb-logo"
                className="payment-logo"
              />
              <img
                src="https://res.cloudinary.com/dxdxmd9mf/image/upload/v1646748858/doounoo/visa-logo.png"
                alt="visa-logo"
                className="payment-logo"
              />
              <img
                src="https://res.cloudinary.com/dxdxmd9mf/image/upload/v1646748848/doounoo/mastercard-logo.png"
                alt="mastercard-logo"
                className="payment-logo"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="cardholder-row">
              <div>Titulaire de la carte :</div>
              <input
                type="text"
                placeholder="prénom NOM"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setMissingInfo(false);
                }}
              />
            </div>

            <CardElement
              options={{
                style: {
                  base: {
                    color: "#36454F",
                    fontSize: 12,
                  },
                },
                placeholder: "text",
              }}
            />
            {creditcard && <button type="submit">Valider</button>}
            {missingInfo && (
              <div
                className="payment-warning"
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                Veuillez spécifier votre nom complet
              </div>
            )}
          </form>
        </>
      ) : null}
    </div>
  );
};

export default CheckoutForm;
