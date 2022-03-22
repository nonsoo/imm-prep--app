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
    <section className="Welcome">
      <div className="welcomeText">
        <p className="welcomeMessage">
          Exam season is coming up!!! Get some practice with short answer
          questions
        </p>
        <p className="welcomeMessage lowerC">
          Pick a topic & Answer the questions! How did you do? Aced It?!?!?! or
          need more practice???
        </p>
        <p className="welcomeMessage">Good luck Studying!!!</p>
      </div>

      <div className="TopicsCon">
        {topicsRes?.map((topic) => (
          <TopicCard
            key={Math.floor(Math.random() * 10000)}
            tName={topic.topicName}
          />
        ))}
      </div>
    </section>
  );
};

export default Topics;
