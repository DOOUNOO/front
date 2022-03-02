import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./index.scss";

const Home = ({data, isLoading}) => {

  return isLoading ? (<>
      {/*TODO add a Spinner with react-loader-spinner?*/}
    </>
  ) : (
    <div className="home-container">
      <div className="hero-bg-image">
        <div className="hero-content">
          <div className="hero-title-categories">
            <p className="hero-title">
              Trouvez<br/>
              <span style={{color: "#ff9f66"}}>conseil.</span>
            </p>
            <div className="categories">
              {/*TODO links to find advice*/}
              <div className="category"><p>Mode</p></div>
              <div className="category"><p>Cosmétique</p></div>
              <div className="category"><p>Art</p></div>
              <div className="category"><p>Santé</p></div>
              <div className="category"><p>Sport</p></div>
              <div className="category"><p>Éducation</p></div>
              <div className="category"><p>Restauration</p></div>
              <div className="category"><p>Business</p></div>
              <div className="category"><p>Droit</p></div>
              <div className="category"><p>Loisirs</p></div>
              <div className="category"><p>Immobilier</p></div>
              <div className="category"><p>Management</p></div>
            </div>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-title-number">
                <p className="step-title">Réservez</p>
                <p className="step-number">1</p>
              </div>
              <p className="step-text">
                Un appel téléphonique avec une personne compétente
              </p>
              <img src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146674/doounoo/hands_tapping_ljupz6.jpg"
                   alt="step"/>
            </div>
            <div className="step">
              <div className="step-title-number">
                <p className="step-title">Discutez</p>
                <p className="step-number">2</p>
              </div>
              <p className="step-text">
                Pour avoir les idées claires sur vos interrogations
              </p>
              <img src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146674/doounoo/meeting_loia5s.jpg"
                   alt="step"/>
            </div>
            <div className="last-step">
              <div className="last-step-text">
                <div className="step-title-number">
                  <p className="step-title">Prenez de meilleures décisions</p>
                  <p className="step-number">3</p>
                </div>
                <p className="step-text">
                  Vous pensez que les meilleures décisions viennent des meilleurs conseils ? Vous avez raison !
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
