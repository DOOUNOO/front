import "./AdviceCard.scss";

const AdviceCard = ({advice}) => {
  return (
    <div className="advice-card" style={{backgroundImage: `url("${advice.picture}")`}}>
      <p className="small-text">{advice.smallText}</p>
      <p className="big-text">{advice.bigText}</p>
    </div>
  );
};

export default AdviceCard;
