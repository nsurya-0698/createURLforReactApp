import React from 'react';
import './Recommendations.css'; // Ensure this contains styles for RecommendationDetails too

const RecommendationDetails = ({ recommendationDetail }) => {
  const { name, address, description, img } = recommendationDetail;

  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} alt={name} />
        <p>{description}</p>
      </div>
      <div className="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  );
};

export default RecommendationDetails;
