import "./index.scss";
const IntroParagraph = ({ title, paragraph }) => {
  /* this component appears in Presentation Card 
  and should appears in page Fiche produit caroussel too. */
  return (
    <div className="intro-paragraph-container">
      <h3 className="intro-title">{title}</h3>
      <p className="intro-paragraph">{paragraph}</p>
    </div>
  );
};

export default IntroParagraph;
