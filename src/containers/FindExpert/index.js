import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCommentDots,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import {
  faUser,
  faStar,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import ReservationModal from "../../components/ReservationModal/index";
import LoginModal from "../../components/LoginModal/LoginModal";
import "./index.scss";

const FindExpert = ({ token, setUser }) => {
  const params = useParams();
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [descIsLong, setDescIsLong] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reservationTime, setReservationTime] = useState(new Date());
  const [unavailableDaysArr, setUnavailableDaysArr] = useState([]);
  const [displayLoginModal, setDisplayLoginModal] = useState(false);

  const handleScheduled = (dateTime) => {
    if (token) {
      console.log("scheduled: ", dateTime);
      setShowModal(true);
      setReservationTime(dateTime);
    } else {
      setDisplayLoginModal(true);
    }
  };

  const timeSlotValidator = (slotTime) => {
    const morningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      8,
      0,
      0
    );

    const eveningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      20,
      0,
      0
    );

    let isValid =
      slotTime.getTime() > morningTime.getTime() &&
      slotTime.getTime() < eveningTime.getTime();

    let placeholderArr = [...unavailableDaysArr];

    for (let i = 0; i < placeholderArr.length; i++) {
      if (slotTime.getDay() === placeholderArr[i]) isValid = false;
    }

    return isValid;
  };

  const theme = {
    primary: "#94cac0",
    secondary: "#45a090",
    background: "white",
    buttons: {
      disabled: {
        color: "#94cac0",
        background: "#f0f0f0",
      },
      confirm: {
        color: "white",
        background: "#258675",
        hover: {
          color: "",
          background: "#94cac0",
        },
      },
    },
    feedback: {
      success: {
        color: "#29aba4",
      },
      failed: {
        color: "#eb7260",
      },
    },
  };

  const ratings = {
    metaData: {
      averageRating: 5,
      totalRatings: 2,
    },
    ratings: [
      {
        key: 1,
        rater: {
          firstName: "Juliette",
          lastName: "Moreau",
          imageURL:
            "https://res.cloudinary.com/dxdxmd9mf/image/upload/v1646924539/doounoo/exp20_yuyqqy.jpg",
        },
        date: "7 f??vrier, 2022",
        rating: 5,
        ratingText: "Son travail ??tait vraiment super ! Je recommande.",
      },
      {
        key: 2,
        rater: {
          firstName: "F??licia",
          lastName: "Lopez",
          imageURL:
            "https://res.cloudinary.com/dxdxmd9mf/image/upload/v1646924539/doounoo/exp14_rvvsqp.jpg",
        },
        date: "10 mars, 2022",
        rating: 5,
        ratingText:
          "Wow ! C'est un gain de temps ??norme dans ma recherche d'informations !",
      },
    ],
  };

  const numOfStars = (rating) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        arr.push(
          <>
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "gold",
                width: 14,
              }}
            />{" "}
          </>
        );
      } else {
        arr.push(
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "grey",
            }}
          />
        );
      }
    }
    return arr;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://doounoo.herokuapp.com/findexpert/${params.id}`
      );
      console.log(params.id);
      console.log(response.data);
      setData(response.data);

      let placeholderArr = [];
      if (!response.data.account.availabilities.Dimanche) {
        placeholderArr.push(0);
      }
      if (!response.data.account.availabilities.Lundi) {
        placeholderArr.push(1);
      }

      if (!response.data.account.availabilities.Mardi) {
        placeholderArr.push(2);
      }

      if (!response.data.account.availabilities.Mercredi) {
        placeholderArr.push(3);
      }

      if (!response.data.account.availabilities.Jeudi) {
        placeholderArr.push(4);
      }

      if (!response.data.account.availabilities.Vendredi) {
        placeholderArr.push(5);
      }

      if (!response.data.account.availabilities.Samedi) {
        placeholderArr.push(6);
      }

      setUnavailableDaysArr(placeholderArr);

      if (token) {
        const fetchUserData = async () => {
          const res = await axios.get(
            `https://doounoo.herokuapp.com/users/${token}`
          );
          console.log(token);
          console.log(res.data);
          setUserData(res.data);
        };
        fetchUserData();
      } else {
        console.log("no token");
      }

      setIsLoading(false);

      if (response.data.account.description.length > 173) setDescIsLong(true);
    };
    fetchData();
  }, [params.id, token]);

  return isLoading ? (
    <div className="offer-container">
      <LineWave color="#ff9f66" height={150} width={150} />
    </div>
  ) : (
    <>
      <div className="top-row-grey-band"></div>
      <div className="offer-container">
        <div className="left-col">
          <div className="main-expert-info">
            <div className="main-row">
              <div className="photo-col">
                {data.account.avatarURL ? (
                  <img
                    src={data.account.avatarURL}
                    alt="avatar"
                    style={{
                      height: 160,
                      width: 160,
                      borderRadius: 10,
                      marginRight: 25,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      position: "relative",
                      height: 160,
                      width: 160,
                      borderRadius: 10,
                      marginRight: 25,
                      objectFit: "cover",
                      backgroundColor: "indigo",
                    }}
                  >
                    <p
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "3rem",
                        color: "#F9F9F9",
                      }}
                    >
                      {data.account.firstName.charAt(0).toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="main-profile-info-col">
                <h1>
                  {data.account.firstName} {data.account.lastName}{" "}
                  <img
                    src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646237849/doounoo/certified_fljewi.png"
                    alt="certified"
                    style={{
                      height: 18,
                      marginLeft: 6,
                    }}
                  ></img>
                </h1>
                <div>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="main-profile-icons"
                  />
                  {data.account.category}
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="main-profile-icons"
                  />
                  {data.account.totalOrder === 0 || !data.account.totalOrder
                    ? "Nouveau sur le site"
                    : data.account.totalOrder + " conseils "}
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="main-profile-icons"
                  />
                  Aide: {data.account.keywords}
                </div>
              </div>
            </div>
            <div className="dashboard">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace(
                    `/findexpert/${params.id}#description`
                  );
                }}
              >
                Pr??sentation
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace(`/findexpert/${params.id}#calendar`);
                }}
              >
                Agenda
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace(`/findexpert/${params.id}#ratings`);
                }}
              >
                Avis ({ratings.metaData.totalRatings})
              </div>
              <div>CV</div>
              <div>Exp??riences</div>
            </div>
          </div>
          <div className="description-container" id="description">
            <h2>Pr??sentation</h2>
            <h3>{data.account.titleDescription}</h3>

            {!descIsLong ? (
              <p>{data.account.description}</p>
            ) : seeAll ? (
              <>
                <p>{data.account.description}</p>
                <div
                  className="desc-btn"
                  onClick={() => {
                    setSeeAll(false);
                  }}
                >
                  Voir moins
                </div>
              </>
            ) : (
              <>
                <p>{data.account.description.substring(0, 170)}...</p>
                <div
                  className="desc-btn"
                  onClick={() => {
                    setSeeAll(true);
                  }}
                >
                  Voir plus
                </div>
              </>
            )}
          </div>
          <div className="calendar-container" id="calendar">
            <h2>Agenda</h2>
            {displayLoginModal && (
              <div
                className="modal-overlay"
                onClick={() => setDisplayLoginModal(false)}
              >
                <LoginModal setUser={setUser} />
              </div>
            )}
            <ReservationModal
              showModal={showModal}
              setShowModal={setShowModal}
              reservationTime={reservationTime}
              data={data}
              userData={userData}
            />
            <div
              style={{
                boxShadow: "none",
                color: "black",
                fontSize: 14,
                maxHeight: 500,
                overflow: "hidden",
              }}
            >
              <DayTimePicker
                timeSlotSizeMinutes={60}
                timeSlotValidator={timeSlotValidator}
                onConfirm={handleScheduled}
                theme={theme}
                confirmText="Prendre rendez-vous"
                isLoading={false}
                isDone={false}
              />
            </div>
          </div>
          <div className="ratings-container" id="ratings">
            <h2>Avis</h2>
            <div className="ratings-data-row">
              <div className="ratings-left-col">
                <div className="avg-rating">
                  {ratings.metaData.averageRating},0
                </div>
                <div className="stars-container">
                  {numOfStars(ratings.metaData.averageRating)}
                </div>
                <div className="total-ratings">
                  {ratings.metaData.totalRatings} avis
                </div>
              </div>
              <div className="ratings-right-col">
                <div className="ratings-visualization-row">
                  <div className="stars-desc">5 ??toiles</div>{" "}
                  <div
                    className="ratings-bar"
                    style={{
                      backgroundColor: "gold",
                    }}
                  ></div>{" "}
                  <div className="total-ratings-desc">(2)</div>
                </div>
                <div className="ratings-visualization-row">
                  <div className="stars-desc">4 ??toiles</div>{" "}
                  <div className="ratings-bar"></div>{" "}
                  <div className="total-ratings-desc">(0)</div>
                </div>
                <div className="ratings-visualization-row">
                  <div className="stars-desc">3 ??toiles</div>{" "}
                  <div className="ratings-bar"></div>{" "}
                  <div className="total-ratings-desc">(0)</div>
                </div>
                <div className="ratings-visualization-row">
                  <div className="stars-desc">2 ??toiles</div>{" "}
                  <div className="ratings-bar"></div>{" "}
                  <div className="total-ratings-desc">(0)</div>
                </div>
                <div className="ratings-visualization-row">
                  <di className="stars-desc" v>
                    1 ??toile
                  </di>{" "}
                  <div className="ratings-bar"></div>{" "}
                  <div className="total-ratings-desc">(0)</div>
                </div>
              </div>
            </div>
            <div className="ratings-list">
              {ratings.ratings.map((e, i) => {
                return (
                  <div key={e.key} className="rating-block">
                    <img
                      src={e.rater.imageURL}
                      alt="avatar"
                      style={{
                        objectFit: "cover",
                      }}
                      className="rater-img-placeholder"
                    ></img>
                    <div className="rating-info-col">
                      <div className="name-row">
                        {e.rater.firstName}{" "}
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{
                            color: "gold",
                            width: 14,
                          }}
                        />{" "}
                        <span
                          style={{
                            color: "gold",
                          }}
                        >
                          5
                        </span>
                      </div>
                      <div className="date-row">{e.date}</div>
                      <div className="rating-txt">{e.ratingText}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right-col">
          <div className="contact-container">
            <div className="video">
              <img
                className="video-img"
                src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646672553/Doounoo/happy_dream_team_jd1dvp.jpg"
                alt="video"
              />
              <img
                className="play-icon-img"
                src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646730290/Doounoo/play_xoirlx.png?fbclid=IwAR3XpRb7JMMraYXRJz4NxuC6uzoceWnjFfvIUBRiCJUIFSSXQZ1ImOBfXlc"
                alt="video"
              />
            </div>
            <div className="details-row">
              <div className="contact-ratings-block">
                <div className="top-line">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "gold",
                    }}
                  />{" "}
                  {ratings.metaData.averageRating},0
                </div>
                <div className="bttm-line">
                  {ratings.metaData.totalRatings} avis
                </div>
              </div>
              <div className="contact-price-block">
                <div className="top-line">{data.account.hourlyPrice} ???</div>
                <div className="bttm-line">de l'heure</div>
              </div>
            </div>
            <div className="contact-btn btn">Envoyer un message</div>
            <div className="favorite-btn btn">Sauvegarder dans mes favoris</div>
            <div className="popularity-data data-line">
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                style={{
                  color: "magenta",
                  width: 20,
                }}
              />{" "}
              4 rendez-vous r??serv??s ces derni??res 48 heures
            </div>
            <div className="response-time-data data-line">
              <FontAwesomeIcon
                icon={faClock}
                style={{
                  color: "#ff9f66",
                  width: 20,
                }}
              />{" "}
              Temps de r??ponse moyen : 2 heures
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindExpert;
