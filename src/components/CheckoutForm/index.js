import { CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./index.scss";

const CheckoutForm = ({ paymentValidated, setPaymentValidated }) => {
  const [paypal, setPaypal] = useState(true);
  const [creditcard, setCreditcard] = useState(false);
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
              onClick={() => {
                setPaypal(true);
                setCreditcard(false);
              }}
            />
            <div>Paypal</div> <div>LOGO</div>
          </div>
          <div className="payment-row">
            <input
              type="radio"
              checked={creditcard}
              onClick={() => {
                setPaypal(false);
                setCreditcard(true);
              }}
            />{" "}
            <div>Carte de crédit</div>
            <div>LOGOS</div>
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

            <CardElement />
            <button type="submit">Valider</button>
            {missingInfo && (
              <div
                className="payment-warning"
                style={{
                  color: "red",
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
