import "./index.scss";
import Button from "../Button.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoubleButtonsRates = ({
  totalRates,
  totalComments,
  expertPrice,
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
                size="xxs"
                style={{ color: "#f8d256" }}
              />

              {totalRates}
            </div>
          </div>
          <div className="comments-detail">{totalComments} avis</div>
        </div>
        <div className="hourly-rate">
          <div className="hourly-pricing">{expertPrice} €</div>
          <div className="hourly-detail">de l'heure</div>
        </div>
      </div>
      <div className="double-btn">
        <div className="first-btn-wrapper">
          <Button linkUrl={firstUrl} rounded={true}>
            {firstTextBtn}
          </Button>
        </div>
        <div className="second-btn-wrapper">
          <Button linkUrl={secondUrl} noBackground={true} rounded={true}>
            {secondTextBtn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoubleButtonsRates;
