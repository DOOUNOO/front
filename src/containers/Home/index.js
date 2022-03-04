import React from "react";

import "./index.scss";
import UserCard from "../../components/UserCard/UserCard";
import Carousel from "../../components/Carousel/Carousel";
import AdviceCard from "../../components/AdviceCard/AdviceCard";

const Home = ({ data, isLoading }) => {
  //TODO fetch this data from the server obviously
  const users = [
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235118/doounoo/man_12_y5jbru.jpg",
      name: "Hugo Busquet",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description:
        "Je vous aide à développer la visibilité de votre business en ligne",
      price: "49",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235098/doounoo/blonde_hair_girl_2_l0gzeh.jpg",
      name: "Sasha Loraine",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description:
        "Je vous donne des conseils sur la comptabilité de votre entreprise",
      price: "69",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235117/doounoo/man_6_qmjnmj.jpg",
      name: "Fred Kacilin",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description: "Je vous partage des tips sur votre personnal branding",
      price: "75",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235098/doounoo/natte_girl_evqhgg.jpg",
      name: "Karen Momoa",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description: "Conseils sur la comptabilité de votre entreprise",
      price: "28",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235118/doounoo/man_12_y5jbru.jpg",
      name: "Hugo Busquet",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description:
        "Je vous aide à développer la visibilité de votre business en ligne",
      price: "49",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235098/doounoo/blonde_hair_girl_2_l0gzeh.jpg",
      name: "Sasha Loraine",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description:
        "Je vous donne des conseils sur la comptabilité de votre entreprise",
      price: "69",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235117/doounoo/man_6_qmjnmj.jpg",
      name: "Fred Kacilin",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description: "Je vous partage des tips sur votre personnal branding",
      price: "75",
    },
    {
      picture:
        "https://res.cloudinary.com/dyj1ddjba/image/upload/v1646235098/doounoo/natte_girl_evqhgg.jpg",
      name: "Karen Momoa",
      avatar:
        "https://pm1.narvii.com/6387/1dd33fc521c0467f576bf731b31f849b93dc6dac_hq.jpg",
      description: "Conseils sur la comptabilité de votre entreprise",
      price: "28",
    },
  ];
  let userCards = [];
  for (let i = 0; i < users.length; i++) {
    userCards.push(<UserCard key={i} user={users[i]} />);
  }

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
    <>{/*TODO add a Spinner with react-loader-spinner?*/}</>
  ) : (
    <>
      <div className="hero-bg-image">
        <div className="hero-content">
          <div className="hero-title-categories">
            <h1 className="hero-title">
              Trouvez
              <br />
              <span style={{ color: "#ff9f66" }}>conseil.</span>
            </h1>
            <div className="categories">
              {/*TODO links to find advice*/}
              <div className="category">
                <p>Mode</p>
              </div>
              <div className="category">
                <p>Cosmétique</p>
              </div>
              <div className="category">
                <p>Art</p>
              </div>
              <div className="category">
                <p>Santé</p>
              </div>
              <div className="category">
                <p>Sport</p>
              </div>
              <div className="category">
                <p>Éducation</p>
              </div>
              <div className="category">
                <p>Restauration</p>
              </div>
              <div className="category">
                <p>Business</p>
              </div>
              <div className="category">
                <p>Droit</p>
              </div>
              <div className="category">
                <p>Loisirs</p>
              </div>
              <div className="category">
                <p>Immobilier</p>
              </div>
              <div className="category">
                <p>Management</p>
              </div>
            </div>
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
    </>
  );
};

export default Home;
