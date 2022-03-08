import "./index.scss";

const MyPassword = () => {
  return (
    <div className="my-password-container">
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
    </div>
  );
};

export default MyPassword;
