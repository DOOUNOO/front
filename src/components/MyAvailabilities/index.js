import "./index.scss";
import Button from "../Button.js";

const MyAvailabilities = () => {
  return (
    <div className="my-email-container">
      <h2 className="account-update-title">Disponibilités</h2>
      <div className="border-wrapper">
        <div className="current-password">
          <label htmlFor="">Mes disponibilités</label>
          <div className="field-button">
            <input type="password" className="input-password" />
            <Button
              isInputBtn={true}
              inputValue="Enregistrer l'adresse e-mail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAvailabilities;
