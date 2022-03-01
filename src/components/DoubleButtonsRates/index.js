import "./index.scss";
import Button from "../Button.js";

const DoubleButtonsRates = ({
  firstTextBtn,
  secondTextBtn,
  firstUrl,
  secondUrl,
}) => {
  return (
    <div className="double-wrapper">
      <div className="double-rates">
        <div className="ratings">test 12</div>
        <div className="hourly-rate">test 34</div>
      </div>
      <div className="double-btn">
        <div className="btn-wrapper">
          <Button linkUrl={firstUrl} rounded={true}>
            {firstTextBtn}
          </Button>
        </div>
        <div className="btn-wrapper">
          <Button linkUrl={secondUrl} noBackground={true} rounded={true}>
            {secondTextBtn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoubleButtonsRates;
