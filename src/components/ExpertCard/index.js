import "./index.scss";
import PresentationCard from "../PresentationCard";
import DoubleButtonsRates from "../DoubleButtonsRates";

const ExpertCard = ({
  expertImg,
  isBaseline,
  expertBaseline,
  expertName,
  expertCategory,
  expertTotalOrder,
  expertTotalReview,
  expertKeywords,
  isIntroParagraph,
  title,
  paragraph,
  hourlyPrice,
  firstTextBtn,
  secondTextBtn,
  firstUrl,
  secondUrl,
  expertId,
}) => {
  /* This component appears in ExpertsFeed component
  and should appears in the dashboard too. */
  return (
    <div className="expert-card">
      <div className="presentation-card-wrapper">
        <PresentationCard
          expertImg={expertImg}
          isBaseline={isBaseline}
          expertBaseline={expertBaseline}
          expertName={expertName}
          expertCategory={expertCategory}
          totalOrder={expertTotalOrder}
          expertKeywords={expertKeywords}
          isIntroParagraph={isIntroParagraph}
          title={title}
          paragraph={paragraph}
          expertId={expertId}
        />
      </div>
      <div className="double-brates-wrapper">
        <DoubleButtonsRates
          totalReview={expertTotalReview}
          hourlyPrice={hourlyPrice}
          firstTextBtn={firstTextBtn}
          secondTextBtn={secondTextBtn}
          firstUrl={firstUrl}
          secondUrl={secondUrl}
        />
      </div>
    </div>
  );
};

export default ExpertCard;
