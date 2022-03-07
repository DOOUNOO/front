import React from "react";
import { useLocation } from "react-router-dom";

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
