import "./ReviewCard.scss";
import React from "react";

const ReviewCard = ({review}) => {
  return (
    <div className="review__div">
      <img
        src={review.avatarURL}
        alt="reviewer's"
      />
      <p>
        {`"` + review.text + `"`}
      </p>
      <h3>{review.name}</h3>
      <h4>{review.job}</h4>
    </div>
  );
};

export default ReviewCard;
