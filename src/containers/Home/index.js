import React, {useEffect, useState} from "react";

import "./index.scss";
import UserCard from "../../components/UserCard/UserCard";
import Carousel from "../../components/Carousel/Carousel";
import AdviceCard from "../../components/AdviceCard/AdviceCard";
import {Link} from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import axios from "axios";

const Home = () => {
  const [userCards, setUserCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://doounoo.herokuapp.com/findexperts`
        );

        const experts = response.data.experts;
        console.log(experts);
        for (let i = 0; i < experts.length; i++) {
          console.log(experts[i]);
          const expert = {
            picture:
              "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235098/doounoo/natte_girl_evqhgg.jpg",
            name: experts[i].account.firstName + " " + experts[i].account.lastName,
            avatar:
              "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
            description: experts[i].account.description,
            price: experts[i].account.hourlyPrice
          }
          let newUserCards = [...userCards];
          newUserCards.push(<UserCard key={i} user={expert} />);
          setUserCards(newUserCards);
        }
        console.log(userCards);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  const advices = [
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318239/doounoo/accounting_amrhbr.jpg",
      smallText: "Améliorez votre",
      bigText: "Comptabilité",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318239/doounoo/business_bgmegi.jpg",
      smallText: "Développez votre",
      bigText: "Business",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318238/doounoo/social-media_gcj9ay.avif",
      smallText: "Attirez plus de clients",
      bigText: "Réseaux sociaux",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318233/doounoo/career_atiac3.avif",
      smallText: "Découvrez un nouveau",
      bigText: "Métier",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318239/doounoo/accounting_amrhbr.jpg",
      smallText: "Améliorez votre",
      bigText: "Comptabilité",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318239/doounoo/business_bgmegi.jpg",
      smallText: "Développez votre",
      bigText: "Business",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318238/doounoo/social-media_gcj9ay.avif",
      smallText: "Attirez plus de clients",
      bigText: "Réseaux sociaux",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646318233/doounoo/career_atiac3.avif",
      smallText: "Découvrez un nouveau",
      bigText: "Métier",
    },
  ];
  let adviceCards = [];
  for (let i = 0; i < advices.length; i++) {
    adviceCards.push(<AdviceCard key={i} advice={advices[i]} />);
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="categories">
        <Link className="link" to="/findexperts/Mode">Mode</Link>
        <Link className="link" to="/findexperts/Cosmétique">Cosmétique</Link>
        <Link className="link" to="/findexperts/Art">Art</Link>
        <Link className="link" to="/findexperts/Santé">Santé</Link>
        <Link className="link" to="/findexperts/Sport">Sport</Link>
        <Link className="link" to="/findexperts/Éducation">Éducation</Link>
        <Link className="link" to="/findexperts/Restauration">Restauration</Link>
        <Link className="link" to="/findexperts/Business">Business</Link>
        <Link className="link" to="/findexperts/Droit">Droit</Link>
        <Link className="link" to="/findexperts/Loisirs">Loisirs</Link>
      </div>
      <div className="hero-bg-image">
        <div className="hero-content">
          <div className="hero-title-subtitle">
            <p className="hero-title">
              Salut,<br/>
              moi c'est <span style={{color: "#ff9f66"}}>Julie.</span>
            </p>
            <p className="hero-subtitle">
              STYLISTE MODÉLISTE
            </p>
          </div>
        </div>
      </div>
      <div className="blue-div">
        <div className="steps">
          <div className="steps-container">
            <div className="step">
              <div className="step-title-number">
                <p className="step-title">Réservez</p>
                <p className="step-number">1</p>
              </div>
              <p className="step-text">
                Un appel téléphonique avec une personne compétente
              </p>
              <img
                src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146674/doounoo/hands_tapping_ljupz6.jpg"
                alt="step"
              />
            </div>
            <div className="step">
              <div className="step-title-number">
                <p className="step-title">Discutez</p>
                <p className="step-number">2</p>
              </div>
              <p className="step-text">
                Pour avoir les idées claires sur vos interrogations
              </p>
              <img
                src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146674/doounoo/meeting_loia5s.jpg"
                alt="step"
              />
            </div>
            <div className="last-step">
              <div className="last-step-text">
                <div className="step-title-number">
                  <p className="step-title">Prenez de meilleures décisions</p>
                  <p className="step-number">3</p>
                </div>
                <p className="step-text">
                  Vous pensez que les meilleures décisions viennent des
                  meilleurs conseils ? Vous avez raison !
                </p>
                <p className="voir-plus">VOIR PLUS</p>
              </div>
              <div className="last-step-img">
                <img
                  src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1646146673/doounoo/direction_kixetc.jpg"
                  alt="step"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recently-visited">
        <h2>Récemment consultés et plus</h2>
        <Carousel elements={userCards} />
        <h2>Services les plus recherchés</h2>
        <Carousel elements={adviceCards} />
      </div>
      <div className="expert-profiles__div">
        <div className="titles__div">
          <h2>La connaissance à portée de main</h2>
          <h3>
            D'autres entrepreneurs et entrepreneuses sont là pour vous aider !
          </h3>
        </div>
        <div className="icons__div">
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646671878/Doounoo/pixlr-bg-result_1_ulolco.png"
              alt="medal-icon"
            />
            <h4>Des experts dans leur domaine</h4>
            <h5>Pour vous aider au mieux</h5>
          </div>

          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646671878/Doounoo/pixlr-bg-result_2_l5ymkm.png"
              alt="certified-icon"
            />
            <h4>Des profils vérifiés</h4>
            <h5>Pour vous offir le meilleur</h5>
          </div>

          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646671878/Doounoo/pixlr-bg-result_3_bbrh9a.png"
              alt="diamond-icon"
            />
            <h4>Des services de qualité</h4>
            <h5>Pour vous proposer le meilleur</h5>
          </div>

          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646671878/Doounoo/pixlr-bg-result_4_xr9vtn.png"
              alt="piggy-bank-icon"
            />
            <h4>À des prix abordables</h4>
            <h5>Pour tous les entrepreneurs et toutes les entrepreneuses</h5>
          </div>
        </div>
        <div className="video__div">
          <img
            className="picture__img"
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646672553/Doounoo/happy_dream_team_jd1dvp.jpg"
            alt="video"
          />
          <img
            className="play-icon__img"
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646730290/Doounoo/play_xoirlx.png"
            alt="video"
          />
        </div>
      </div>
      <div className="discover-offers__div">
        <div className="titles__div container">
          <h2>Découvrez les offres</h2>
        </div>
        <div className="icons__div">
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676059/Doounoo/Mode-removebg-preview_qmeyic.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Mode</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676058/Doounoo/Comestique-removebg-preview_wcke0t.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Cosmétique</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676059/Doounoo/Art-removebg-preview_cit51m.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Art</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676060/Doounoo/Sante-removebg-preview_fv4agn.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Santé</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676060/Doounoo/Sport-removebg-preview_idxwyk.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Sport</h4>
              <h5>_____</h5>
            </div>
          </div>
        </div>
        <div className="icons__div">
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676059/Doounoo/Education-removebg-preview_taeqgo.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Education</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676059/Doounoo/pixlr-bg-result_auixgg.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Restauration</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676059/Doounoo/Business-removebg-preview_kejwie.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Business</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676058/Doounoo/Droit-removebg-preview_gkmjrz.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Droit</h4>
              <h5>_____</h5>
            </div>
          </div>
          <div className="icons-section__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646676059/Doounoo/Loisirs-removebg-preview_wj3t58.png"
              alt="medal-icon"
            />
            <div className="category__div">
              <h4>Loisir</h4>
              <h5>_____</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
