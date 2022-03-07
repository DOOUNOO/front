import "./index.scss";
import { useState } from "react";
import Button from "../../components/Button.js";

const Account = () => {
  const [updateAccount, setUpdateAccount] = useState(true);

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
        {updateAccount && (
          <>
            {/* first part right container */}
            <div className="update-img-container">
              <div className="img-to-update">
                <img src="" alt="" />
              </div>
              <Button linkUrl="/account">Insérer une image</Button>
              <div className="img-specifications">
                <div className="max-size-spec">Taille maximum: 2MB</div>
                <div className="Format">Format: JPG ou PNG</div>
              </div>
            </div>
            {/* second part right container */}
            <form>
              <div className="firstname-to-update">
                <label htmlFor="">Prénom</label>
                <input type="text" />
              </div>
              <div className="lastname-to-update">
                <label htmlFor="">Nom</label>
                <input type="text" />
              </div>
              <div className="phonenumber-to-update">
                <label htmlFor="">Numéro de téléphone</label>
                <input type="text" />
              </div>
              <div className="social-media-connect">
                <label htmlFor="">Réseaux sociaux</label>
                <div className="social-medias-link">
                  <div className="linkedin-link">
                    <div className="social-media-icon">
                      <img src="" alt="" />
                    </div>
                    <input type="text" />
                  </div>
                  <div className="instagram-link">
                    <div className="social-media-icon">
                      <img src="" alt="" />
                    </div>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Account;
