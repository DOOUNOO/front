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
  expertId,
}) => {
  /* This component appears in ExpertCard component */

  // This card has conditional display options depending on where it is displayed
  /* Conditional display : 
Props isBaseline :  Baseline under the picture
isIntroParagraph : Intro Paragraph component under the presentation block with icons (it's also a component) */

  return (
    <div className="presentation-card-container">
      <div className="presentation-img-container">
        {expertImg ? (
          <img src={expertImg} alt={`It's ${expertName}`} />
        ) : (
          <div className="default-avatar-img-feed">
            <p>{expertName.charAt(0).toUpperCase()}</p>
          </div>
        )}

        {isBaseline && (
          <div className="presentation-baseline">{expertBaseline}</div>
        )}
      </div>
      <div className="presentation-informations-wrapper">
        <div className="presentation-separator">
          <div className="presentation-name-icon">
            <h3 className="presentation-name">{expertName}</h3>
            <div className="presentation-icon verify">
              <FontAwesomeIcon
                icon="fa-check-circle"
                size="xl"
                style={{ color: "#09b1ba" }}
              />
            </div>
          </div>
          <div className="presentation-category-icon">
            <div className="presentation-icon">
              <FontAwesomeIcon
                icon="lightbulb"
                size="lg"
                style={{ color: "grey" }}
              />
            </div>
            <div className="presentation-category">{expertCategory}</div>
          </div>
          <div className="presentation-category-icon">
            <div className="presentation-icon">
              <FontAwesomeIcon
                icon="user"
                size="lg"
                style={{ color: "grey" }}
              />
            </div>

            <div className="presentation-total">
              {totalOrder === 0
                ? "Nouveau sur la plateforme"
                : `${totalOrder} services`}
            </div>
          </div>
          <div className="presentation-category-icon">
            <div className="presentation-icon">
              <FontAwesomeIcon
                icon="comment-dots"
                size="lg"
                style={{ color: "grey" }}
              />
            </div>
            <div className="presentation-expertise">{expertKeywords}</div>
          </div>
        </div>
        {isIntroParagraph && (
          <IntroParagraph
            title={title}
            paragraph={paragraph}
            expertId={expertId}
          />
        )}
      </div>
    </div>
  );
};

export default PresentationCard;
