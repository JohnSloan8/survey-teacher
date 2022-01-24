import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";
import axios from "axios";
import { Container } from "react-bootstrap";
import createAudioQuestions from "../utils/createAudioQuestions";

StylesManager.applyTheme("modern");

const Questionnaire = () => {
  const [surveyJSON, setSurveyJSON] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  console.log("id:", id);

  const alertResults = (sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.surveyjs.io/public/Survey/getSurvey?surveyId=af7ca1cb-84ff-4005-a034-bd34ddd08c23"
      )
      .then((json) => {
        createAudioQuestions(id, json.data);
        // setSurveyJSON(json.data);
        // console.log("json.data:", json.data);
        // survey = new Model(json.data);
        // setLoading(false);
        // survey.focusFirstQuestionAutomatic = true;
        // survey.onComplete.add(createSurvey);
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

export default Questionnaire;
