import "./css/layout.css";
import "./css/comp.css";
import "./css/QuestionComp.css";

import TopicCard from "./Components/TopicCard";
import QuestionComp from "./Components/QuestionComp";

function App() {
  return (
    <div className="Question-Site">
      <div className="Header">
        <p className="Header__Title">Immunology Prep</p>
      </div>

      <div className="TopicsCon">
        <TopicCard tName="B Cells" />
        <TopicCard tName="T Cells" />
        <TopicCard tName="Allergy" />
        <TopicCard tName="Innate Immunity" />
      </div>

      <QuestionComp />
    </div>
  );
}

export default App;
