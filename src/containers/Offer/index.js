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

import "./index.scss";

const Offer = () => {
  const params = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [descIsLong, setDescIsLong] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  const handleScheduled = (dateTime) => {
    console.log("scheduled: ", dateTime);
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

    const isValid =
      slotTime.getTime() > morningTime.getTime() &&
      slotTime.getTime() < eveningTime.getTime();
    return isValid;
  };

  const theme = {
    primary: "#94cac0",
    secondary: "#258675",
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
      totalRatings: 41,
    },
    ratings: [
      {
        key: 1,
        rater: {
          firstName: "Juliette",
          lastName: "Moreau",
        },
        date: "7 février, 2022",
        rating: 5,
        ratingText: "Son travail était vraiment super ! Je recommande.",
      },
      {
        key: 2,
        rater: {
          firstName: "Félicia",
          lastName: "Lopez",
        },
        date: "10 mars, 2022",
        rating: 5,
        ratingText:
          "Wow ! C'est un gain de temps énorme dans ma recherche d'informations !",
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
        `https://doounoo.herokuapp.com/findexperts/${params.id}`
      );
      setData(response.data);
      setIsLoading(false);

      if (response.data.account.description.length > 173) setDescIsLong(true);
    };
    fetchData();
  }, [params.id]);

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
                <div
                  style={{
                    height: 160,
                    width: 160,
                    borderRadius: 10,
                    marginRight: 25,
                    backgroundColor: "#258675",
                  }}
                ></div>
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
                  131 conseils
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
                  window.location.replace(`/offer/${params.id}/#description`);
                }}
              >
                Présentation
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace(`/offer/${params.id}/#calendar`);
                }}
              >
                Agenda
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace(`/offer/${params.id}/#ratings`);
                }}
              >
                Avis (41)
              </div>
              <div>CV</div>
              <div>Expériences</div>
            </div>
          </div>
          <div className="description-container" id="description">
            <h2>Présentation</h2>
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
                doneText="Rendez-vous confirmé !"
              />
            </div>
          </div>
          <div className="ratings-container" id="ratings">
            <h2>Avis</h2>
            <div className="ratings-data-row">
              <div className="ratings-left-col">
                <div className="avg-rating">
                  {ratings.metaData.averageRating}
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
                  <div className="stars-desc">5 étoiles</div>{" "}
                  <div
                    className="ratings-bar"
                    style={{
                      backgroundColor: "gold",
                    }}
                  ></div>{" "}
                  <div className="total-ratings-desc">(41)</div>
                </div>
                <div className="ratings-visualization-row">
                  <div className="stars-desc">4 étoiles</div>{" "}
                  <div className="ratings-bar"></div>{" "}
                  <div className="total-ratings-desc">(0)</div>
                </div>
                <div className="ratings-visualization-row">
                  <div className="stars-desc">3 étoiles</div>{" "}
                  <div className="ratings-bar"></div>{" "}
                  <div className="total-ratings-desc">(0)</div>
                </div>
                <div className="ratings-visualization-row">
                  <div className="stars-desc">2 étoiles</div>{" "}
                  <div className="ratings-bar"></div>{" "}
                  <div className="total-ratings-desc">(0)</div>
                </div>
                <div className="ratings-visualization-row">
                  <di className="stars-desc" v>
                    1 étoile
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
                    <div className="rater-img-placeholder"></div>
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
            <div className="video"></div>
            <div className="details-row">
              <div className="contact-ratings-block">
                <div className="top-line">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "gold",
                    }}
                  />{" "}
                  5,0
                </div>
                <div className="bttm-line">3 avis</div>
              </div>
              <div className="contact-price-block">
                <div className="top-line">{data.account.hourlyPrice} €</div>
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
              4 rendez-vous réservés ces dernières 48 heures
            </div>
            <div className="response-time-data data-line">
              <FontAwesomeIcon
                icon={faClock}
                style={{
                  color: "#ff9f66",
                  width: 20,
                }}
              />{" "}
              Temps de réponse moyen : 2 heures
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
