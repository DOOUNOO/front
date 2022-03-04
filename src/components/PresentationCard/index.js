import "./index.scss";
import IntroParagraph from "../IntroParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PresentationCard = ({
  expertImg,
  isBaseline,
  expertBaseline,
  expertName,
  expertCategory,
  totalOrder,
  expertKeywords,
  isIntroParagraph,
  title,
  paragraph,
}) => {
  /* This component appears in OfferCard component */

  // This card has conditional display options depending on where it is displayed
  /* Conditional display : 
Props isBaseline :  Baseline under the picture
isIntroParagraph : Intro Paragraph component under the presentation block with icons (it's also a component) */

  return (
    <div className="presentation-card-container">
      <div className="presentation-img-container">
        <img src={expertImg} alt={`It's ${expertName}`} />
        {isBaseline && (
          <div className="presentation-baseline">{expertBaseline}</div>
        )}
      </div>
      <div className="presentation-informations-wrapper">
        <div className="presentation-separator">
          <div className="presentation-name-icon">
            <h3 className="presentation-name">{expertName}</h3>
            <div className="presentation-icon">@</div>
          </div>
          <div className="presentation-category-icon">
            <div className="presentation-icon">
              <FontAwesomeIcon icon="lightbulb" style={{ color: "grey" }} />
            </div>
            <div className="presentation-category">{expertCategory}</div>
          </div>
          <div className="presentation-category-icon">
            <div className="presentation-icon">
              <FontAwesomeIcon icon="user" style={{ color: "grey" }} />
            </div>

            <div className="presentation-total">
              {totalOrder === 0
                ? "Nouveau sur la plateforme"
                : `${totalOrder} services`}
            </div>
          </div>
          <div className="presentation-category-icon">
            <div className="presentation-icon">
              <FontAwesomeIcon icon="comment-dots" style={{ color: "grey" }} />
            </div>
            <div className="presentation-expertise">{expertKeywords}</div>
          </div>
        </div>
        {isIntroParagraph && (
          <IntroParagraph title={title} paragraph={paragraph} />
        )}
      </div>
    </div>
  );
};

export default PresentationCard;
