import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import smillingBoy from "/Users/emilieleury/08-leReacteur/6-doounoo/doounoo-front/src/assets/images/smiling_boy.jpg";

import "./index.scss";

const ExpertSignup = ({ setUser }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const [isRobot, setIsRobot] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (password === confirmPassword) {
        const response = await axios.post(
          "https://doounoo.herokuapp.com/expert/signup",
          {
            email,
            password,
            account: {
              firstName,
              lastName,
            },
          }
        );
        if (response.data.token) {
          setUser(response.data.token, response.data._id);
          navigate("/");
        }
      } else {
        setErrorMessage("Vos mot-de-passes ne concordent pas");
      }
    } catch (error) {
      console.log("ExpertSignup Error ===>", error.message);
      console.log("Cath error ===>", error.response);

      if (error.response.status === 400) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div className="expert-signup__div">
      <div className="expert-signup_framed__div">
        <h1>Monétisez vos compétences en les partageant</h1>
        <h6>Faites appel à votre expérience et travailler à votre rythme</h6>
        <form onSubmit={handleSubmit} className="expert-signup__form">
          <div className="expert-signup_form_names__div">
            <input
              type="text"
              placeholder="Nom"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Prénom"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <label>
            <input type="checkbox" />
            Se souvenir de moi
          </label>
          <label>
            <input type="checkbox" />
            Je ne suis pas un robot
          </label>
          <input
            type="submit"
            value="Valider l'inscription"
            className="expert-signup_form_submit__input"
          />
          <span>{errorMessage}</span>
        </form>
        <p>
          En vous inscrivant, vous acceptez les
          <span className="expert-signup_blue-span__span">
            {" "}
            Conditions Générales d'Utilisation{" "}
          </span>
          et <span> la Politique de Confidentialité de Doounoo</span>
        </p>
      </div>
    </div>
  );
};

export default ExpertSignup;
