import "./index.scss";
import { useState } from "react";
import MyAccount from "../../components/MyAccount";
import MyEmail from "../../components/MyEmail";
import MyPassword from "../../components/MyPassword";
import MyAvailabilities from "../../components/MyAvailabilities";

const Account = () => {
  // What we want to display ?

  const [myAccount, setMyAccount] = useState(true);
  // By default, the first displayed component is myAccount
  const [myEmail, setMyEmail] = useState(false);
  const [myPassword, setMyPassword] = useState(false);
  const [myAvailabilities, setMyAvailabilities] = useState(false);

  const handleClickOnMyAccount = () => {
    setMyAccount(true);
    setMyEmail(false);
    setMyPassword(false);
    setMyAvailabilities(false);
  };

  const handleClickOnMyAvailabilities = () => {
    setMyAvailabilities(true);
    setMyAccount(false);
    setMyEmail(false);
    setMyPassword(false);
  };
  const handleClickOnMyEmail = () => {
    setMyEmail(true);
    setMyAccount(false);
    setMyPassword(false);
    setMyAvailabilities(false);
  };
  const handleClickOnMyPassword = () => {
    setMyPassword(true);
    setMyAccount(false);
    setMyEmail(false);
    setMyAvailabilities(false);
  };

  /*   const [updateAccount, setUpdateAccount] = useState(true); */
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  return (
    <div className="account-container">
      {/* Left container */}
      <aside className="account-menu">
        <ul>
          <li onClick={handleClickOnMyAccount}>Compte</li>
          <li onClick={handleClickOnMyAvailabilities}>Disponibilités</li>
          <li onClick={handleClickOnMyEmail}>Votre e-mail</li>
          <li onClick={handleClickOnMyPassword}>Mot de passe</li>
          <li>Etablissement</li>
          <li>Moyens de paiement</li>
          <li>Historique de paiement</li>
        </ul>
      </aside>
      {/* Right container */}
      <div className="account-to-update">
        {myAccount && (
          <MyAccount
            category={category}
            subcategory={subcategory}
            setCategory={setCategory}
            setSubcategory={setSubcategory}
          />
        )}
        {myAvailabilities && <MyAvailabilities />}
        {myEmail && <MyEmail />}
        {myPassword && <MyPassword />}
      </div>
    </div>
  );
};

export default Account;
