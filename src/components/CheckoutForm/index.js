import { CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ paymentValidated, setPaymentValidated }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentValidated(true);
  };

  return (
    <div className="card-form-section">
      {!paymentValidated ? (
        <form onSubmit={handleSubmit}>
          <div>
            <CardElement />
          </div>
          <button type="submit">Pay</button>
        </form>
      ) : null}
    </div>
  );
};

export default CheckoutForm;
