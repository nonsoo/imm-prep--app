import React from "react";

import TopicCard from "./TopicCard";

const Topics = () => {
  return (
    <div className="TopicsCon">
      <TopicCard tName="B Cells" />
      <TopicCard tName="T Cells" />
      <TopicCard tName="Allergy" />
      <TopicCard tName="Innate Immunity" />
    </div>
  );
};

export default Topics;
