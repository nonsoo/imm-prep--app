import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosSkipForward } from "react-icons/io";
import { FaRegStopCircle } from "react-icons/fa";

import Btn from "./InteractiveComp/Btn";

const QuestionComp = () => {
  const navigate = useNavigate();

  const [toggleAns, setToggleAns] = useState(false);
  const [userResp, setUserResp] = useState("");

  const showAns = (e) => {
    e.preventDefault();
    setToggleAns((prevState) => !prevState);
  };

  const nextQuestion = () => {
    setUserResp("");
    setToggleAns((prevState) => !prevState);
  };
  return (
    <main className="mainQuesCon">
      {toggleAns ? (
        <section className="Answer">
          <div className="UserResponse">
            <p className="Question__Count">Question 1 of 10</p>
            <p className="Question__Ques">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum est
              maxime animi distinctio quia error doloremque cupiditate eveniet
              mollitia reprehenderit iste neque eligendi cumque possimus tenetur
              ea ducimus, minus quam! Beatae, minus! Quibusdam temporibus
              expedita repudiandae distinctio ut voluptate facilis corporis
              totam aspernatur, illo fuga sapiente vero! Velit nostrum
              distinctio nam, tempore eius amet minima dignissimos numquam
              vitae, quasi illo?
            </p>

            <p className="userAnsTitle">Your Submitted Answer:</p>
            <p className="userAns">{userResp}</p>
          </div>
          <div className="Answer__Ideal">
            <p className="Answer__IdealTitle">The Ideal Answer:</p>
            <p className="Answer__IdealAns">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              delectus quidem reprehenderit. Enim, reiciendis. Rem, dolor sit
              cumque magnam quas ipsum quis repudiandae illum pariatur atque
              necessitatibus explicabo fuga tempore. Illo corporis, quod
              incidunt provident tempore consequatur reprehenderit accusantium
              impedit maiores ab doloribus cumque. Unde corrupti nostrum natus
              velit. Veritatis quaerat tempore qui in distinctio ipsum
              blanditiis possimus maiores rerum!
            </p>
          </div>
          <Btn
            btnName="Next Question"
            exCSS="Answer__Btn"
            actFunc={() => nextQuestion()}
          />
        </section>
      ) : (
        <form className="Question" onSubmit={showAns}>
          <p className="Question__Count">Question 1 of 10</p>
          <p className="Question__Ques">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum est
            maxime animi distinctio quia error doloremque cupiditate eveniet
            mollitia reprehenderit iste neque eligendi cumque possimus tenetur
            ea ducimus, minus quam! Beatae, minus! Quibusdam temporibus expedita
            repudiandae distinctio ut voluptate facilis corporis totam
            aspernatur, illo fuga sapiente vero! Velit nostrum distinctio nam,
            tempore eius amet minima dignissimos numquam vitae, quasi illo?
          </p>
          <textarea
            className="Question__input"
            value={userResp}
            onChange={(e) => setUserResp(e.target.value)}
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
