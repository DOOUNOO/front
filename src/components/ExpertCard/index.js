import "./index.scss";
import PresentationCard from "../PresentationCard";
import DoubleButtonsRates from "../DoubleButtonsRates";

const ExpertCard = ({
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
  totalRates,
  totalComments,
  expertPrice,
  firstTextBtn,
  secondTextBtn,
  firstUrl,
  secondUrl,
}) => {
  /* This component appears in FindExperts containers
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
          expertTotalRates={expertTotalRates}
          expertKeywords={expertKeywords}
          isIntroParagraph={isIntroParagraph}
          title={title}
          paragraph={paragraph}
        />
      </div>
      <div className="double-brates-wrapper">
        <DoubleButtonsRates
          totalRates={totalRates}
          totalComments={totalComments}
          expertPrice={expertPrice}
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
