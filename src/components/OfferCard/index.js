import "./index.scss";
import PresentationCard from "../PresentationCard";
import DoubleButtonsRates from "../DoubleButtonsRates";

const OfferCard = ({
  expertImg,
  isBaseline,
  expertBaseline,
  expertName,
  expertCategory,
  expertTotalRates,
  expertKeywords,
  isIntroParagraph,
  title,
  paragraph,
  firstTextBtn,
  secondTextBtn,
  firstUrl,
  secondUrl,
}) => {
  return (
    <div className="offer-card">
      <div className="presentation-card-wrapper">
        <PresentationCard
          expertImg={expertImg}
          isBaseline={isBaseline}
          expertBaseline={expertBaseline}
          expertName={expertName}
          expertCategory={expertCategory}
          expertTotalRates={expertTotalRates}
          expertKeywords={expertKeywords}
          isIntroParagraph={isIntroParagraph}
          title={title}
          paragraph={paragraph}
        />
      </div>
      <div className="double-brates-wrapper">
        <DoubleButtonsRates
          firstTextBtn={firstTextBtn}
          secondTextBtn={secondTextBtn}
          firstUrl={firstUrl}
          secondUrl={secondUrl}
        />
      </div>
    </div>
  );
};

export default OfferCard;
