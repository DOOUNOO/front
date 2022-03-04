import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const [isRobot, setIsRobot] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if (email && password && isRobot === false) {
      try {
        event.preventDefault();
        const response = await axios.post(
          "https://doounoo.herokuapp.com/login",
          // "http://localhost:3100/login", // adresse locale !
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

  return (
    <div className="login-container">
      <div className="framed__div">
        <div className="title__div">
          <p className="title__p">Connectez-vous</p>
          <p>
            Pas encore membre ?{" "}
            <span
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
            <div className="email_input__div">
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <br />
          </div>

          <div className="password__div">
            <p>Mot de passe</p>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <span>Oublié ?</span>
            <br />
          </div>

          <div className="checkboxs__div">
            <label>
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
            </label>
            <label>
              <input
                type="checkbox"
                onClick={() => {
                  if (isRobot === false) {
                    setIsRobot(true);
                  } else {
                    setIsRobot(false);
                  }
                }}
              />
              Je ne suis pas un robot
            </label>
          </div>

          <div className="submit__div">
            <input
              type="submit"
              value="Se connecter"
              className="login_form_submit__input"
            />
            <br />
            <span>{errorMessage}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
