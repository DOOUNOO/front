import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ token, setToken }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="logo-div">DOOUNOO</div>
      </div>

      {token ? (
        <div className="header-right logged-in">
          <div className="menu-item-container find-a-service">
            <div className="find-a-service">Trouver un service</div>
            <div className="underline"></div>
          </div>
          <Link
            to="/publish"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="menu-item-container offer-a-service">
              <div className="offer-a-service">Proposer un service</div>
              <div className="underline"></div>
            </div>
          </Link>
          <div className="menu-item-container">Messages</div>
          <div className="menu-item-container">Mes favoris</div>
          <div className="menu-item-container">Avatar</div>
        </div>
      ) : (
        <div className="header-right logged-out">
          <div className="menu-item-container find-a-service">
            <div className="find-a-service">Trouver un service</div>
            <div className="underline"></div>
          </div>

          <Link
            to="/publish"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="menu-item-container offer-a-service">
              <div className="offer-a-service">Proposer un service</div>
              <div className="underline"></div>
            </div>
          </Link>
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="menu-item-container">Se connecter</div>
          </Link>
          <Link
            to="/signup"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="menu-item-container sign-up-btn">S'inscrire</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
