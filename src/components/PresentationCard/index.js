import "./index.scss";
import IntroParagraph from "../IntroParagraph";

const PresentationCard = ({ isBaseline, isIntroParagraph }) => {
  // This card has conditional display options depending on where it is displayed
  /* Conditional display : 
Props isBaseline :  Baseline under the picture
isIntroParagraph : Intro Paragraph component under the presentation block with icons (it's also a component) */

  /* The "fiche produit caroussel" page does not have the same layout in terms of buttons and notices, 
so a different component is needed that is not integrated directly into the card 
If you are looking for 
*/

  return (
    <div className="presentation-card-container">
      <div className="presentation-img-container">
        <img src="" alt="" />
        {isBaseline === "true" && (
          <div className="presentation-baseline">Carpe Diem</div>
        )}
      </div>
      <div className="presentation-informations-wrapper">
        <div className="presentation-name-icon">
          <h3 className="presentation-name">Name Name</h3>
          <div className="presentation-icon">@</div>
        </div>
        <div className="presentation-category-icon">
          <div className="presentation-icon">@</div>
          <div className="presentation-category">Mode</div>
        </div>
        <div className="presentation-total-icon">
          <div className="presentation-icon">@</div>
          <div className="presentation-total">Mode</div>
        </div>
        <div className="presentation-category-icon">
          <div className="presentation-icon">@</div>
          <div className="presentation-expertise">Mode</div>
        </div>
      </div>
      {isIntroParagraph === "true" && <IntroParagraph />}
    </div>
  );
};

export default PresentationCard;
