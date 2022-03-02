import "./index.scss";
import Button from "../Button.js";

const DoubleButtonsRates = ({
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
        <div className="ratings">test 12</div>
        <div className="hourly-rate">test 34</div>
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
