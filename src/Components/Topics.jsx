import { useEffect, useState } from "react";

import TopicCard from "./TopicCard";

import SanityClient from "../sanity";

const Topics = () => {
  const [topicsRes, setTopicsRes] = useState(null);

  useEffect(() => {
    const query = `*[CourseName=="Immunology"]{
      topics[]{
        topicName
      }
    }`;
    SanityClient.fetch(query)
      .then((res) => setTopicsRes(res[0].topics))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="TopicsCon">
      {topicsRes?.map((topic) => (
        <TopicCard
          key={Math.floor(Math.random() * 10000)}
          tName={topic.topicName}
        />
      ))}
    </div>
  );
};

export default Topics;
