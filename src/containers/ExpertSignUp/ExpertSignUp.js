import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

import "./ExpertSignUp.scss";

const ExpertSignup = ({ setUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const validEmailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!firstName) {
        setErrorMessage("Veuillez saisir votre prénom");
      } else if (!lastName) {
        setErrorMessage("Veuillez saisir votre nom");
      } else if (!email.match(validEmailRegex)) {
        setErrorMessage("Veuillez saisir une addresse email valide");
      } else if (!password) {
        setErrorMessage("Veuillez saisir un mot de passe");
      } else if (!confirmPassword) {
        setErrorMessage("Veuillez confirmer votre mot de passe");
      } else if (password !== confirmPassword) {
        setErrorMessage("Les mots de passe sont différents");
      } else {
        setIsLoading(true);
        setErrorMessage("");
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
          navigate(`/account/${response.data._id}`);
        }
      }
    } catch (error) {
      setIsLoading(false);

      console.log("ExpertSignup Error ===>", error.message);
      console.log("Cath error ===>", error.response);

      if (error.response.status === 400) {
        setErrorMessage("Cet email est déjà associé à un compte");
      }
    }
  };

  return (
    <div className="expert-signup__div">
      <div className="expert-signup-content">
        <div className="expert-signup_framed__div">
          <h1>Monétisez vos compétences en les partageant</h1>
          <h2>Faites appel à votre expérience et travailler à votre rythme</h2>
          <form onSubmit={handleSubmit} className="expert-signup__form">
            <div className="expert-signup_form_names__div">
              <input
                type="text"
                placeholder="Prénom"
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Nom"
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
            {isLoading ? (
              <div className="loader">
                <PulseLoader color={"white"} />
              </div>
            ) : (
              <input
                type="submit"
                value="Valider l'inscription"
                className="expert-signup_form_submit__input"
              />
            )}
            <span className="error-message">{errorMessage}</span>
          </form>
          <div className="licence-agreement">
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
      </div>
    </div>
  );
};

export default ExpertSignup;
