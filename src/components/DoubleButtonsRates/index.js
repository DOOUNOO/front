import "./index.scss";
import Button from "../Button.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoubleButtonsRates = ({
  totalReview,
  hourlyPrice,
  firstTextBtn,
  secondTextBtn,
  firstUrl,
  secondUrl,
}) => {
  /* this component appears in  OfferCard page 
  and should appears in page Fiche produit caroussel
   */
  return (
    <div className="double-wrapper">
      <div className="double-rates">
        <div className="ratings">
          <div className="stars-rating">
            <div className="total-rates-stars">
              <FontAwesomeIcon
                className="fontawesome-star"
                icon="star"
                size="xs"
                style={{ color: "#f8d256" }}
              />
              5
            </div>
          </div>
          <div className="comments-detail">{totalReview} avis</div>
        </div>
        <div className="hourly-rate">
          <div className="hourly-pricing">{hourlyPrice} €</div>
          <div className="hourly-detail">de l'heure</div>
        </div>
      </div>
      <div className="double-btn">
        <div className="first-btn-wrapper">
          <Button isLinkBtn={true} linkUrl={firstUrl} rounded={true}>
            {firstTextBtn}
          </Button>
        </div>
        <div className="second-btn-wrapper">
          <Button
            isLinkBtn={true}
            linkUrl={secondUrl}
            noBackground={true}
            rounded={true}
          >
            {secondTextBtn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoubleButtonsRates;
