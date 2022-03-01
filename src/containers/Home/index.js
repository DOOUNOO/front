import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./index.scss";

const Home = ({data, isLoading}) => {

  return isLoading ? (<>
      //TODO add a Spinner with react-loader-spinner?
    </>
  ) : (
    <div className="home-container">
      <div className="hero-bg-image">
        <div className="hero-content">
          <div className="hero-title-search">
            <p className="hero-title">
              Salut,<br/>
              moi c'est <span style={{color: "#ff9f66"}}>Julie.</span>
            </p>
            <p className="hero-subtitle">
              STYLISTE MODÉLISTE
            </p>
            <p className="search-title">
              De quoi avez-vous besoin ?
            </p>
            <div className="search-container">
              <FontAwesomeIcon
                className="search-input-icon"
                icon="magnifying-glass"
              />
              <input
                className="search-input"
                type="text"
                placeholder='Essayez « styliste »'
              />
              <button className="search-button">Rechercher</button>
            </div>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-title-number">
                <p className="step-title">Contactez</p>
                <p className="step-number">1</p>
              </div>
              <p className="step-text">
                Un étudiant possédant les expertises souhaitées
              </p>
              <img src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146674/doounoo/meeting_loia5s.jpg"
                   alt="step"/>
            </div>
            <div className="step">
              <div className="step-title-number">
                <p className="step-title">Commandez</p>
                <p className="step-number">2</p>
              </div>
              <p className="step-text">
                Des services en toute simplicité et à moindre coût
              </p>
              <img src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146674/doounoo/hands_tapping_ljupz6.jpg"
                   alt="step"/>
            </div>
            <div className="last-step">
              <div className="last-step-text">
                  <div className="step-title-number">
                    <p className="step-title">Recevez un travail de qualité</p>
                    <p className="step-number">3</p>
                  </div>
                  <p className="step-text">
                    Profitez des compétences acquises de nos meilleurs étudiants pour vos projets !
                  </p>
                <p className="voir-plus">VOIR PLUS</p>
              </div>
              <div className="last-step-img">
              <img src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146673/doounoo/direction_kixetc.jpg"
                   alt="step"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-div"/>
      <div className="home-container">
      </div>
    </div>
  );
};

export default Home;
