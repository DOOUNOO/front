import "./index.scss";
const IntroParagraph = ({ title, paragraph }) => {
  return (
    <div className="intro-paragraph-container">
      <h3 className="intro-title">{title}</h3>
      <p className="intro-paragraph">{paragraph}</p>
    </div>
  );
};

export default IntroParagraph;
