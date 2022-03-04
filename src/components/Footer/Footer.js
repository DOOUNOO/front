import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-overarching-container">
      <div className="footer-container">
        <div className="main-row">
          <div className="category-col col">
            <div>Catégorie</div>
            <div>Mode</div>
            <div>Cosmétique</div>
            <div>Art</div>
            <div>Santé</div>
            <div>Sport</div>
            <div>Éducation</div>
            <div>Restaurant</div>
            <div>Business</div>
            <div>Droit</div>
            <div>Loisirs</div>
          </div>
          <div className="about-col col">
            <div>À propos</div>
            <div>Presse & Infos</div>
            <div>Partenariats</div>
            <div>Politique de confidentialité</div>
            <div>Conditions d'utilisation</div>
            <div>Propriété intellectuelle</div>
            <div>Relations investisseurs</div>
          </div>
          <div className="help-col col">
            <div>Aide</div>
            <div>Aide & Assistance</div>
            <div>Confiance & Sécurité</div>
            <div>Vendre un service sur DOOUNOO</div>
            <div>Acheter un service sur DOOUNOO</div>
          </div>
          <div className="community-col col">
            <div>Communauté</div>
            <div>Événements</div>
            <div>Blog</div>
            <div>Forum</div>
            <div>Normes de la communauté</div>
            <div>Podcast</div>
            <div>Affiliés</div>
            <div>Inviter un ami</div>
            <div>Donner des conseils</div>
          </div>
        </div>
        <div className="bottom-row">
          <div className="logo-div">DOOUNOO.</div>
          <div className="copyright">©2022 DOOUNOO. Tous droits réservés.</div>
          <div className="social-media-links">
            <div className="social-media-link-container">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social-media-link-container">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="social-media-link-container">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
