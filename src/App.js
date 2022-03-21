import "./css/layout.css";
import "./css/comp.css";
import "./css/QuestionComp.css";

import { Routes, Route } from "react-router-dom";

import Topics from "./Components/Topics";
import QuestionComp from "./Components/QuestionComp";

function App() {
  console.log(process.env);
  return (
    <div className="Question-Site">
      <div className="Header">
        <p className="Header__Title">Immunology Prep</p>
      </div>

      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/:Topic" element={<QuestionComp />} />
      </Routes>
    </div>
  );
}

export default App;
