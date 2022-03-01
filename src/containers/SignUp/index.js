import React, { useState } from "react";
import StudentSignupForm from "../../components/StudentSignupForm/StudentSignupForm";

import "./index.css";

const Signup = () => {
  const [userType, setUserType] = useState(0);
  // state 0 : no information about the user yet
  // state 1 : the user is a Student
  // state 2 : the user is a Business

  return (
    <div className="signup-container">
      {userType === 0 ? (
        <div>
          <h1>Êtes-vous ...</h1>
          <button
            onClick={() => {
              setUserType(1);
            }}
          >
            Un.e étudiant.e
          </button>
          <button
            onClick={() => {
              setUserType(2);
            }}
          >
            Une entreprise
          </button>
        </div>
      ) : (
        <div>
          {userType === 1 ? <StudentSignupForm /> : <span>is a business</span>}
        </div>
      )}
    </div>
  );
};

export default Signup;
