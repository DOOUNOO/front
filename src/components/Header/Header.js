import "bootstrap/dist/css/bootstrap.css";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// Still needs to be modified so that logged-in user sees appropriate links based on whether business or student

const Header = ({ token, setToken }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="header-overarching-container">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <div className="logo-div">DOOUNOO.</div>
          </Link>
        </div>

        {token ? (
          <div className="header-right logged-in">
            <Link
              // Update when route known
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="menu-item-container find-a-service">
                <div className="find-a-service">Trouver un service</div>
                <div className="underline"></div>
              </div>
            </Link>
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
              // Update when route known
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="menu-item-container">Messages</div>
            </Link>
            <Link
              // Update when route known
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="menu-item-container">Mes favoris</div>
            </Link>

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle tag="div">
                <div className="menu-item-container avatar-container">
                  {/* Put first letter of logged in user's name  */}S
                  <div className="logged-in-green-circle"></div>
                </div>
              </DropdownToggle>
              <DropdownMenu className="menu">
                <DropdownItem className="menu-item" onClick={() => {}}>
                  Tableau de bord
                </DropdownItem>
                <DropdownItem className="menu-item" divider />
                <DropdownItem className="menu-item" onClick={() => {}}>
                  Se déconnecter
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        ) : (
          <div className="header-right logged-out">
            <Link
              // Update when route known
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="menu-item-container find-a-service">
                <div className="find-a-service">Trouver un service</div>
                <div className="underline"></div>
              </div>
            </Link>

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
    </div>
  );
};

export default Header;
