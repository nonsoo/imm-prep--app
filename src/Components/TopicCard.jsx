import React from "react";

const TopicCard = ({ tName }) => {
  return (
    <section className="topicCard">
      <p className="topicCard__Name">{tName}</p>
      <button className="topicCard__Btn">Start</button>
    </section>
  );
};

export default TopicCard;
