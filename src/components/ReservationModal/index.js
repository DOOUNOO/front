import { useEffect } from "react";
import "./index.scss";

const ReservationModal = ({
  display,
  reservationTime,
  day,
  month,
  year,
  hour,
}) => {
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
          blablabla {year} {month} {day} {hour}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
