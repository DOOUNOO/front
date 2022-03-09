import "./index.scss";
import Button from "../../components/Button.js";
const MyEmail = ({ handleSubmit, email, setEmail }) => {
  return (
    <div className="my-email-container">
      <h2 className="account-update-title">Votre e-mail</h2>
      <form className="border-wrapper" onSubmit={handleSubmit}>
        <div className="current-password">
          <label htmlFor="">Votre e-mail</label>
          <div className="field-button">
            <input
              type="email"
              className="input-email"
              placeholder={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Button
              isInputBtn={true}
              inputValue="Modifier l'adresse e-mail"
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyEmail;
