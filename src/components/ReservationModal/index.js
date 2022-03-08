import { useNavigate } from "react-router-dom";
import "./index.scss";

const weekdaysFrench = new Array(7);
weekdaysFrench[0] = "dimanche";
weekdaysFrench[1] = "lundi";
weekdaysFrench[2] = "mardi";
weekdaysFrench[3] = "mercredi";
weekdaysFrench[4] = "jeudi";
weekdaysFrench[5] = "vendredi";
weekdaysFrench[6] = "samedi";

const monthsFrench = new Array(12);
monthsFrench[0] = "janvier";
monthsFrench[1] = "février";
monthsFrench[2] = "mars";
monthsFrench[3] = "avril";
monthsFrench[4] = "mai";
monthsFrench[5] = "juin";
monthsFrench[6] = "juillet";
monthsFrench[7] = "août";
monthsFrench[8] = "septembre";
monthsFrench[9] = "octobre";
monthsFrench[10] = "novembre";
monthsFrench[11] = "décembre";

const ReservationModal = ({
  showModal,
  setShowModal,
  reservationTime,
  data,
  userData,
}) => {
  const navigate = useNavigate();

  if (!showModal) {
    return null;
  }

  console.log(data.account.hourlyPrice);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <h1>Confirmation de prise de rendez-vous</h1>
          <div className="date-time-section">
            <h2>Date et heure</h2>
            <div className="date-time-details">
              {weekdaysFrench[reservationTime.getDay()]}{" "}
              {reservationTime.getDate()}{" "}
              {monthsFrench[reservationTime.getMonth()]}{" "}
              {reservationTime.getFullYear()}, {reservationTime.getHours()}:00
            </div>
          </div>
          <div className="pricing-section">
            <div className="pricing-breakdown">
              <div className="left-col">
                <div>Informations</div>
                <div>1 heure de conseil</div>
                <div>Frais de transaction</div>
                <div>Annulation du rendez-vous</div>
              </div>
              <div className="right-col">
                <div>Tarif horaire</div>
                {/* Needs to include the real price */}
                <div>{data.account.hourlyPrice},00 €</div>
                <div>0,99 €</div>
                <div
                  style={{
                    color: "green",
                  }}
                >
                  Gratuite
                </div>
              </div>
            </div>
            <div className="total-price-row">
              <div className="total-key">TOTAL</div>
              <div className="total-sum">
                {(data.account.hourlyPrice + 0.99)
                  .toString()
                  .replaceAll(".", ",")}{" "}
                €
              </div>
            </div>
          </div>
          <div className="buttons">
            <button
              className="confirm-btn"
              onClick={() => {
                navigate("/payment", {
                  state: {
                    userData: userData,
                    expertData: data,
                    reservationTime: reservationTime,
                  },
                });
              }}
            >
              Confirmer mon rendez-vous
            </button>
            <button
              className="cancel-btn"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
