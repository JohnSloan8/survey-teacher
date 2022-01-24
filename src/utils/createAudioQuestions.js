import axios from "axios";
import english from "../dataFiles/lrec_2022_english_shortened.json";
import farsi from "../dataFiles/lrec_2022_farsi_shortened.json";
import french from "../dataFiles/lrec_2022_french_shortened.json";
import irish from "../dataFiles/lrec_2022_irish_shortened.json";
import italian from "../dataFiles/lrec_2022_italian_shortened.json";
import polish from "../dataFiles/lrec_2022_polish_shortened.json";

const configDict = {
  English: english,
  Farsi: farsi,
  French: french,
  Irish: irish,
  Italian: italian,
  Polish: polish
};

const createAudioQuestions = (surveyId) => {
  console.log("surveyId:", surveyId);
  axios
    .get(
      "https://warm-reef-17230.herokuapp.com/api/v1/getSurveyById/" + surveyId
    )
    .then((json) => {
      console.log("json.data.language:", configDict[json.data.language]);
    });
};

export default createAudioQuestions;
