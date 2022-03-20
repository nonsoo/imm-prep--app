import { useState } from "react";
import Btn from "./InteractiveComp/Btn";

const QuestionComp = () => {
  const [toggleAns, setToggleAns] = useState(false);
  const showAns = (e) => {
    e.preventDefault();
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
            actFunc={() => setToggleAns((prevState) => !prevState)}
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
          <textarea className="Question__input" />
          <Btn exCSS="Question__btn" btnName="Submit" />
        </form>
      )}
    </main>
  );
};

export default QuestionComp;
