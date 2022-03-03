import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const Signup = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState(0);
  // state 0 : no information about the user yet
  // state 1 : the user is a Student
  // state 2 : the user is a Business

  return (
    <div className="signup-container signup__div">
      <div className="signup_framed__div">
        <h1>Je souhaite ...</h1>
        <div className="signup_framed_buttons__div">
          <button
            className="user__button"
            onClick={() => {
              navigate("/signup/user");
            }}
          >
            Trouver un.e expert.e
          </button>

          <button
            className="expert__button"
            onClick={() => {
              navigate("/signup/expert");
            }}
          >
            Partager et monétiser mon expertise
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
