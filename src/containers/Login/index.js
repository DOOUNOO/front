import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState;
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        // "https://doounoo.herokuapp.com/login",
        "http://localhost:3100/login", // adresse locale !
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token, response.data._id);
        // redirection
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Email et/ou mot de passe erronné.s");
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input type="submit" value="Se connecter" />
        <br />
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};

export default Login;
