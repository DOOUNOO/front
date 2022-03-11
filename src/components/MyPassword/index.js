import Button from "../Button.js";
import "./index.scss";

const MyPassword = ({ handleSubmit }) => {
  return (
    <form className="my-password-container" onSubmit={handleSubmit}>
      <h2 className="account-update-title">Changer le mot de passe</h2>
      <div className="border-wrapper">
        <div className="current-password">
          <label htmlFor="">Mot de passe actuel</label>
          <input type="password" />
        </div>

        <div className="new-password">
          <label htmlFor="">Nouveau mot de passe</label>
          <input type="password" />
        </div>

        <div className="check-new-password">
          <label htmlFor="">Vérifier le mot de passe</label>
          <input type="password" />
        </div>
      </div>
      <div>
        <Button isInputBtn={true}></Button>
      </div>
    </form>
  );
};

export default MyPassword;
