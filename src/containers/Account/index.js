import "./index.scss";
import { useState } from "react";
import MyAccount from "../../components/MyAccount";

const Account = () => {
  const [updateAccount, setUpdateAccount] = useState(true);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  // What we want to display ?

  const [myAccount, setMyAccount] = useState(true);
  const [myEmail, setMyEmail] = useState(false);
  const [password, setPMassword] = useState(false);
  const [myAvailability, setMyAvailability] = useState(false);

  return (
    <div className="account-container">
      {/* Left container */}
      <aside className="account-menu">
        <ul>
          <li>Compte</li>
          <li>Votre e-mail</li>
          <li>Mot de passe</li>
          <li>Etablissement</li>
          <li>Moyens de paiement</li>
          <li>Historique de paiement</li>
          <li>Agenda</li>
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
      </div>
    </div>
  );
};

export default Account;
