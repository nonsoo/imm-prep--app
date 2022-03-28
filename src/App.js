import "./css/layout.css";
import "./css/comp.css";
import "./css/QuestionComp.css";
import "./css/loading.css";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";

import Topics from "./Components/Topics";
import QuestionComp from "./Components/QuestionComp";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="Question-Site">
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/:Topic" element={<QuestionComp />} />
      </Routes>

      <div className="disclaim">
        <p className="disclaim__Text">
          This platform is not affiliated with any University or Course.
          Questions are for practice only.
        </p>
      </div>
    </div>
  );
}

export default App;
