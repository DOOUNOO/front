import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container signup__div">
      <div className="signup_framed__div">
        <h1>Je souhaite ...</h1>
        <div className="signup_framed_buttons__div">
          <div
            className="button user__button"
            onClick={() => {
              navigate("/signup/user");
            }}
          >
            <p>Trouver un.e expert.e</p>
          </div>

          <div
            className="button expert__button"
            onClick={() => {
              navigate("/signup/expert");
            }}
          >
            <p>Partager et monétiser mon expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
