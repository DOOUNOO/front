import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Signup = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState(0);
  // state 0 : no information about the user yet
  // state 1 : the user is a Student
  // state 2 : the user is a Business

  return (
    <div className="signup-container">
      <h1>Je veux ...</h1>

      <button
        onClick={() => {
          navigate("/signup/user");
        }}
      >
        Trouver un.e expert.e
      </button>

      <button
        onClick={() => {
          navigate("/signup/expert");
        }}
      >
        Partager et monétiser mon expertise
      </button>
    </div>
  );
};

export default Signup;
