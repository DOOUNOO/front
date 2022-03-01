import "./index.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Button = ({ rounded, noBackground, squared, children, linkUrl }) => {
  return (
    /*  This button has conditional display options depending on where it is displayed
  
Conditional display : 
-rounded (with turquoise background)
-squared (with turquoise background)
-noBackground (without background)

*/

    /* This button appear on : DoubleButtonsRate component */

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
  );
};

export default Button;
