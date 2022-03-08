import React, { useState } from "react";

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

  const [review, setReview] = useState(2);

  return isLoading ? (
    <>{/*TODO add a Spinner with react-loader-spinner?*/}</>
  ) : (
    <>
      <div className="hero-bg-image">
        <div className="hero-content">
          <div className="hero-title-categories">
            <h1 className="hero-title">
              Salut,
              <br />
              moi c'est {""}
              <span style={{ color: "#ff9f66" }}>Julie.</span>
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
      <div className="reviews__div">
        <div className="titles__div">
          <h1>Ce que les clients disent de nous</h1>
        </div>

        {review === 1 ? (
          <div className="review__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646736567/Doounoo/2_pikejx.jpg"
              alt="reviewer's"
            />
            <p>
              "J'ai trouvé ici des conseils pertinents pour la comptabilité de
              mon entreprise. Sur cette plateforme, j'ai pu économiser temps et
              argent par la digitalisation de ce service."
            </p>
            <h3>Sofia Maoudi</h3>
            <h4>Entrepreneuse | HostPost</h4>
          </div>
        ) : review === 2 ? (
          <div className="review__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646736571/Doounoo/1_fvhjhp.png"
              alt="reviewer's"
            />
            <p>
              "Je souhaitais créer une ruche connectée, mais je n'y connaissais
              rien. Sur Doounoo, j'ai pu contacter un apiculteur expérimenté
              m'ayant donner des conseils et son retour d'expérience."
            </p>
            <h3>Steven Maccocini</h3>
            <h4>Entrepreneur | La Beeruche</h4>
          </div>
        ) : (
          <div className="review__div">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1646736567/Doounoo/3_vga5bj.jpg"
              alt="reviewer's"
            />
            <p>
              "J'avais énormement de questions concernant la création d'un
              restaurant en terme de budget et de travail. Ici, j'ai pu trouver
              les réponses à mes questions via le retour des meilleurs
              restaurateurs."
            </p>
            <h3>Mathilde Vanier</h3>
            <h4>Entrepreneuse | MamaMia(m)</h4>
          </div>
        )}

        <div className="checkboxs__div">
          <input
            type="radio"
            name="reviews"
            onClick={() => {
              setReview(1);
            }}
          />
          <input
            type="radio"
            name="reviews"
            onClick={() => {
              setReview(2);
            }}
          />
          <input
            type="radio"
            name="reviews"
            onClick={() => {
              setReview(3);
            }}
          />
        </div>
      </div>
      <div className="discover-offers__div">
        <div className="titles__div container">
          <h1>Besoin d'un conseil ?</h1>
          <br />
          <h1>Contactez-nous !</h1>
          <p>
            Prenez contact avec nous pour tout type d'aide. Nous sommes là pour
            vous donner le meilleur et aussi pour vous aider à trouver le
            conseil dont vous avez besoin
          </p>
        </div>
        <form action="">
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Adresse mail" />
          <input type="text" placeholder="Message" />
        </form>
      </div>
    </>
  );
};

export default Home;
