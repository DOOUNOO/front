import { useEffect } from "react";
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

const ReservationModal = ({ display, reservationTime }) => {
  useEffect(() => {
    // switch (month) {
    //   case 0:
    //     setMonth("janvier");
    //   case 1:
    //     setMonth("février");
    //   case 2:
    //     setMonth("mars");
    //   case 3:
    //     setMonth("avril");
    //   case 4:
    //     setMonth("mai");
    //   case 5:
    //     setMonth("juin");
    //   case 6:
    //     setMonth("juillet");
    //   case 7:
    //     setMonth("août");
    //   case 8:
    //     setMonth("septembre");
    //   case 9:
    //     setMonth("octobre");
    //   case 10:
    //     setMonth("novembre");
    //   case 11:
    //     setMonth("décembre");
    // }
  }, [reservationTime]);

  if (!display) {
    return null;
  }

  console.log(reservationTime);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          Year: {reservationTime.getFullYear()}
          Day: {weekdaysFrench[reservationTime.getDay()]}
          Hour: {reservationTime.getHours()}
          Month: {monthsFrench[reservationTime.getMonth()]}
          Date: {reservationTime.getDate()}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
