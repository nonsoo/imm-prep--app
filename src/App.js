import "./css/layout.css";
import "./css/comp.css";
import "./css/QuestionComp.css";

import { Routes, Route } from "react-router-dom";

import Topics from "./Components/Topics";
import QuestionComp from "./Components/QuestionComp";

function App() {
  return (
    <div className="Question-Site">
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/:Topic" element={<QuestionComp />} />
      </Routes>

      <div className="disclaim">
        <p className="disclaim__Text">
          This platform is not affiliated with Bioc39 or the University of
          Toronto. Questions are for practice only.
        </p>
      </div>
    </div>
  );
}

export default App;
