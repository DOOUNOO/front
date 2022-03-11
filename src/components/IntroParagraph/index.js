import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const IntroParagraph = ({ sliceOrRedirect, title, paragraph, expertId }) => {
  /* If you want to display the button to show or hide a part of a paragraph,
set the props sliceOrRedirect to true.
Else, you will get the same component with a redirect button to the expert profil*/

  /* this component appears in Presentation Card 
  and should appears in page Fiche produit caroussel too. */

  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="intro-paragraph-container">
      <h3 className="intro-title">{title}</h3>

      {/* If component displayed in feeds, we display the button with links to redirect, 
    else, we display the button to show or hide a part of the paragraph */}
      {sliceOrRedirect ? (
        !readMore ? (
          <>
            <p className="intro-paragraph">{`${paragraph.slice(0, 100)}...`}</p>
            <span className="readmore-btn" onClick={handleReadMore}>
              Voir plus
            </span>
          </>
        ) : (
          <>
            <p className="intro-paragraph">{paragraph}</p>
            <span className="readmore-btn" onClick={handleReadMore}>
              Voir moins
            </span>
          </>
        )
      ) : (
        <>
          <p className="intro-paragraph">
            {paragraph && `${paragraph.slice(0, 100)}...`}
          </p>
          <Link to={`/findexpert/${expertId}`}>
            <span className="readmore-btn">Voir plus</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default IntroParagraph;
