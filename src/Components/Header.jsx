import React from "react";

import NotesTake from "../imgs/notebook.svg";

const Header = () => {
  return (
    <div className="HeaderNew">
      <div className="HeaderNew__TitleCon">
        <p className="HeaderNew__Title">
          Exam season is coming up!!! Get some practice with short answer
          questions!
        </p>
        <p className="welcomeMessage lowerC">
          Pick a topic & Answer the questions! How did you do? Aced It?!?!?! or
          need more practice???
        </p>
        <p className="welcomeMessage">Good luck Studying!!!</p>
      </div>

      <img src={NotesTake} alt="" className="HeaderNew__Img" />
    </div>
  );
};

export default Header;
