import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IoIosSkipForward } from "react-icons/io";
import { FaRegStopCircle } from "react-icons/fa";

import Btn from "./InteractiveComp/Btn";

import SanityClient from "../sanity";
import BlockContent from "@sanity/block-content-to-react";

const QuestionComp = () => {
  const navigate = useNavigate();
  const { Topic } = useParams();
  const [getQuesAnsPair, setGetQuesAnsPair] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const query = `*[CourseName=="Immunology"]{
  topics[topicName=="${Topic}"]{
    quesAnsPair
  }
}`;
    SanityClient.fetch(query).then((res) =>
      setGetQuesAnsPair(res[0].topics[0].quesAnsPair)
    );
  }, [Topic]);

  const [toggleAns, setToggleAns] = useState(false);
  const [userResp, setUserResp] = useState("");

  const showAns = (e) => {
    e.preventDefault();
    setToggleAns((prevState) => !prevState);
  };

  const nextQuestion = () => {
    if (count + 1 < getQuesAnsPair?.length) {
      setCount((prevC) => prevC + 1);
      setToggleAns((prevState) => !prevState);
      setUserResp("");
    }
  };

  console.log(getQuesAnsPair);

  return (
    <main className="mainQuesCon">
      {toggleAns ? (
        <section className="Answer">
          <div className="UserResponse">
            <p className="Question__Count">
              {count + 1} of {getQuesAnsPair?.length}
            </p>
            <div className="Question__Ques">
              <BlockContent
                blocks={getQuesAnsPair && getQuesAnsPair[count].question}
              />
            </div>

            <p className="userAnsTitle">Your Submitted Answer:</p>
            <p className="userAns">{userResp}</p>
          </div>
          <div className="Answer__Ideal">
            <p className="Answer__IdealTitle">The Ideal Answer:</p>
            <div className="Question__Ques">
              <BlockContent
                blocks={getQuesAnsPair && getQuesAnsPair[count].answer}
              />
            </div>
          </div>
          <Btn
            btnName="Next Question"
            exCSS="Answer__Btn"
            actFunc={() => nextQuestion()}
          />
          <Btn
            btnName="Quit"
            exCSS="Answer__BtnQuit"
            actFunc={() => navigate("/")}
          />
        </section>
      ) : (
        <form className="Question" onSubmit={showAns}>
          <p className="Question__Count">
            {count + 1} of {getQuesAnsPair?.length}
          </p>

          <div className="Question__Ques">
            <BlockContent
              blocks={getQuesAnsPair && getQuesAnsPair[count].question}
            />
          </div>
          <textarea
            className="Question__input"
            value={userResp}
            onChange={(e) => setUserResp(e.target.value)}
            required
          />
          <div className="Question__Settings">
            <div className="settingsOption">
              <IoIosSkipForward />
              <p className="settingOption__text">Skip</p>
            </div>
            <div className="settingsOption" onClick={() => navigate("/")}>
              <FaRegStopCircle />
              <p className="settingOption__text">Stop</p>
            </div>
          </div>
          <Btn exCSS="Question__btn" btnName="Submit" />
        </form>
      )}
    </main>
  );
};

export default QuestionComp;
