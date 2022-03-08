import "./LoginModal.scss";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginModal = ({setUser}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const response = await axios.post(
          "https://doounoo.herokuapp.com/login",
          // "http://localhost:3100/login",
          {
            email: email,
            password: password,
          }
        );

        console.log(response.data);
        if (response.data.token) {
          setUser(response.data.token, response.data._id);
          navigate("/");
        }
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
        if (error.response.status === 400 || error.response.status === 401) {
          setErrorMessage("Email et/ou mot de passe erronné.s");
        }
      }
    } else {
      setErrorMessage("Merci d'entrer tous les champs");
    }
  };

  return (<div className="login-container">
    <div className="framed__div" onClick={(event) => event.stopPropagation()}>
      <div className="title__div">
        <p className="title__p">Connectez-vous</p>
        <p>
          Pas encore membre ?{" "}
          <span className="link"
                onClick={() => {
                  navigate("/signup");
                }}
          >
              Inscrivez-vous
            </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="login__form">
        <div className="email__div">
          <p>Votre e-mail</p>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="empty"/>
        </div>

        <div className="password__div">
          <p>Mot de passe</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <span className="link">Oublié ?</span>
        </div>

        <div className="checkboxs__div">
          <div className="empty"/>
          <div className="checkbox-div">
            <input
              type="checkbox"
              onClick={() => {
                if (rememberMe === false) {
                  setRememberMe(true);
                } else {
                  setRememberMe(false);
                }
              }}
            />
            Se souvenir de moi
          </div>
          <div className="empty"/>
        </div>

        <div className="submit__div">
          <div className="empty"/>
          <button
            type="submit"
            className="login_form_submit__input"
          >Se connecter</button>
          <div className="empty"/>
        </div>
        <div className="error-message-div">
          <div className="empty"/>
          <span className="error-message">{errorMessage}</span>
          <div className="empty"/>
        </div>
      </form>
    </div>
  </div>);
};

export default LoginModal;
