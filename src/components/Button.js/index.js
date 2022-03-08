import "./index.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Button = ({
  rounded,
  noBackground,
  squared,
  children,
  isLinkBtn,
  linkUrl,
  isNormalBtn,
  isInputBtn,
  inputValue,
}) => {
  return (
    /* This button appears in : DoubleButtonsRates component */

    /*  This button has conditional display options depending on where it is displayed
  

  Conditional display Btn : 
  Choose the btn you need ! 
  
  With Btn with Link ? set isLinkBtn={true} 
(don't forget to set a Link ! with linkUrl="/yourlink")

  Without Link ? set isNormalBtn={true} and wrap the component with a link
  or an onClick !
  
  A Submit Btn input ? set isInputbtn={true}
  (don't forget to add an inputValue="my text btn")

Conditional display classNames : 
-rounded (with turquoise background)
-squared (with turquoise background)
-noBackground (without background)

More option can be added, check the "classnames" package docs.
*/
    <>
      {isLinkBtn && (
        <Link to={linkUrl}>
          <button
            className={classNames("cta-btn", {
              squared: squared,
              rounded: rounded,
              noBackground: noBackground,
            })}
          >
            {children}
          </button>
        </Link>
      )}

      {isNormalBtn && (
        <button
          className={classNames("cta-btn", {
            squared: squared,
            rounded: rounded,
            noBackground: noBackground,
          })}
        >
          {children}
        </button>
      )}

      {isInputBtn && (
        <input
          className={classNames("submit-btn", {
            squared: squared,
            rounded: rounded,
            noBackground: noBackground,
          })}
          type="submit"
          value={inputValue}
        />
      )}
    </>
  );
};

export default Button;
