import React from "react";

import TopicCard from "./TopicCard";

const Topics = () => {
  const topics = ["B Cells", "T cells", "Allergy", "Innate Immunity"];
  return (
    <div className="TopicsCon">
      {topics.map((topic) => (
        <TopicCard key={Math.floor(Math.random() * 10000)} tName={topic} />
      ))}
    </div>
  );
};

export default Topics;
