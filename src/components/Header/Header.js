import "bootstrap/dist/css/bootstrap.css";
import "./Header.scss";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
import LoginModal from "../LoginModal/LoginModal";

const Header = ({ token, setUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [FirstName, setFirstName] = useState(null);
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const [accountLoggedInType, setAccountLoggedInType] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() => {
    try {
      if (token) {
        const fetchUserData = async () => {
          const res = await axios.post(`https://doounoo.herokuapp.com/user`, {
            token: token,
          });

          if (!res.data) {
            try {
              if (token) {
                const fetchExpertData = async () => {
                  const res = await axios.post(
                    `https://doounoo.herokuapp.com/findexpert`,
                    {
                      token: token,
                    }
                  );
                  setAccountLoggedInType("expert");
                  setUserID(res.data._id);
                  setFirstName(res.data.account.firstName);
                };
                fetchExpertData();
              }
            } catch (error) {
              console.log(error);
            }
          } else {
            setAccountLoggedInType("user");
            setFirstName(res.data.account.firstName);
          }
        };
        fetchUserData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const toggle = () => setDropdownOpen(!dropdownOpen);

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
              to="/findexperts"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="menu-item-container find-a-service">
                <div className="find-a-service">Trouver un conseil</div>
                <div className="underline"></div>
              </div>
            </Link>
            {!token ||
              (accountLoggedInType === "expert" && (
                <Link
                  to={
                    accountLoggedInType === "expert"
                      ? `/account/${userID}`
                      : "/signup/expert"
                  }
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="menu-item-container offer-a-service">
                    <div className="offer-a-service">Proposer un conseil</div>
                    <div className="underline"></div>
                  </div>
                </Link>
              ))}
            <div className="menu-item-container">Messages</div>
            <div className="menu-item-container">Mes favoris</div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle tag="div">
                <div className="menu-item-container avatar-container">
                  {FirstName ? FirstName.charAt(0).toUpperCase() : ""}
                  <div className="logged-in-green-circle"></div>
                </div>
              </DropdownToggle>
              <DropdownMenu className="menu">
                <Link to={`/account/${userID}`}>
                  <DropdownItem className="menu-item">Profil</DropdownItem>
                </Link>
                <DropdownItem className="menu-item">
                  Tableau de bord
                </DropdownItem>
                <DropdownItem className="menu-item" divider />
                <DropdownItem
                  className="menu-item"
                  onClick={() => {
                    setUser(null, null);
                    Navigate("/");
                  }}
                >
                  Se déconnecter
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        ) : (
          <div className="header-right logged-out">
            <Link
              to="/findexperts"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="menu-item-container find-a-service">
                <div className="find-a-service">Trouver un conseil</div>
                <div className="underline"></div>
              </div>
            </Link>

            <Link
              to={token ? "/publish" : "/signup/expert"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="menu-item-container offer-a-service">
                <div className="offer-a-service">Proposer un conseil</div>
                <div className="underline"></div>
              </div>
            </Link>
            <div
              className="menu-item-container login-btn"
              onClick={() => setDisplayLoginModal(true)}
            >
              Se connecter
            </div>
            {displayLoginModal && (
              <div
                className="modal-overlay"
                onClick={() => setDisplayLoginModal(false)}
              >
                <LoginModal
                  setUser={setUser}
                  setDisplayLoginModal={setDisplayLoginModal}
                />
              </div>
            )}
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
