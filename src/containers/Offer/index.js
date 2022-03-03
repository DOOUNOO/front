import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

import "./index.scss";

const Offer = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [descIsLong, setDescIsLong] = useState(false);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://doounoo.herokuapp.com/findexperts/${params.id}`
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);

      if (response.data.account.description.length > 179) {
        setDescIsLong(true);
      }
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
                  {data.account.firstName} {data.account.lastName}
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
                <p>{data.account.description.substring(0, 179)}...</p>
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
          </div>
          <div className="ratings-container" id="ratings">
            <h2>Avis</h2>
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
