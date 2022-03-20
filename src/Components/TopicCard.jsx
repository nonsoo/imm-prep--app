import React from "react";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ tName }) => {
  const navigate = useNavigate();
  return (
    <section className="topicCard">
      <p className="topicCard__Name">{tName}</p>
      <button className="topicCard__Btn" onClick={() => navigate(`/${tName}`)}>
        Start
      </button>
    </section>
  );
};

export default TopicCard;
