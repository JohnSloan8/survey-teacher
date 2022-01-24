import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import QuestionnaireCreator from "./components/QuestionnaireCreator";
import QuestionnaireList from "./components/QuestionnaireList";
import Questionnaire from "./components/Questionnaire";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="creator" element={<QuestionnaireCreator />} />
        <Route path="list" element={<QuestionnaireList />} />
        <Route path="questionnaire/:id" element={<Questionnaire />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
