import "./index.scss";
import Button from "../../components/Button.js";
const MyEmail = () => {
  return (
    <div className="my-email-container">
      <h2 className="account-update-title">Votre e-mail</h2>
      <div className="border-wrapper">
        <div className="current-password">
          <label htmlFor="">Votre e-mail</label>
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

export default MyEmail;
