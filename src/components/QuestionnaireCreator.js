import { React, useEffect, useState } from "react";
import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";
import axios from "axios";
import { createSurvey } from "../APIcalls/toServer";
import { Container } from "react-bootstrap";

StylesManager.applyTheme("modern");

const QuestionnaireCreator = () => {
  const [surveyJSON, setSurveyJSON] = useState({});
  const [isLoading, setLoading] = useState(true);

  const alertResults = (sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.surveyjs.io/public/Survey/getSurvey?surveyId=5500e929-cf60-41c2-903d-a8359724615f"
      )
      .then((json) => {
        setSurveyJSON(json.data);
        console.log("json.data:", json.data);
        survey = new Model(json.data);
        setLoading(false);
        survey.focusFirstQuestionAutomatic = true;
        survey.onComplete.add(createSurvey);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <Container>
      <Survey model={survey} />
    </Container>
  );
};

export default QuestionnaireCreator;
