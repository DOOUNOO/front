import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const UserSignup = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [amIARobot, setAmIARobot] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://doounoo.herokuapp.com/user/signup",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token, response.data._id);
        navigate("/");
      }
    } catch (error) {
      console.log("StudentSignup Error ===>", error.message);
      console.log("Cath error ===>", error.response);

      if (error.response.status === 400) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div>
      <h1>Inscrivez-vous</h1>
      <span>
        Vous avez déjà un compte ? <span>Connectez-vous</span>{" "}
      </span>
      <form onSubmit={handleSubmit}>
        <h2>Votre nom d'utilisateur ou d'utilisatrice</h2>
        <input
          type="text"
          // placeholder="Julie"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <h2>Votre e-mail</h2>
        <input
          type="email"
          // placeholder="julie@email.fr"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <h2>Créez un mot de passe</h2>
        <input
          type="password"
          // placeholder="Entrez votre mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <h2>Confirmez votre mot de passe</h2>
        <input
          type="password"
          // placeholder="Confirmez votre mot de passe"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <label>
          <input type="checkbox" />
          Se souvenir de moi
        </label>
        <span>CAPTCHA je ne suis pas un robot</span>
        <input type="submit" value="Valider l'inscription" />
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};

export default UserSignup;
