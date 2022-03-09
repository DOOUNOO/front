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
            <div className="check-row">
              <div className="day-to-check">
                <input type="checkbox" name="monday-check" />
                <label for="monday-check">Lundi</label>
              </div>
              <div className="day-to-check">
                <input type="checkbox" name="tuesday-check" />
                <label for="tuesday-check">Mardi</label>
              </div>
              <div className="day-to-check">
                <input type="checkbox" name="tuesday-check" />
                <label for="tuesday-check">Mercredi</label>
              </div>
              <div className="day-to-check">
                <input type="checkbox" name="tuesday-check" />
                <label for="tuesday-check">Jeudi</label>
              </div>
              <div className="day-to-check">
                <input type="checkbox" name="tuesday-check" />
                <label for="tuesday-check">vendredi</label>
              </div>
              <div className="day-to-check">
                <input type="checkbox" name="tuesday-check" />
                <label for="tuesday-check">Samedi</label>
              </div>
              <div className="day-to-check">
                <input type="checkbox" name="tuesday-check" />
                <label for="tuesday-check">Dimanche</label>
              </div>
            </div>
            <Button
              isInputBtn={true}
              inputValue="Mettre à jour ses disponibilités"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAvailabilities;
