import axios from "axios";

const instance = axios.create({
  baseURL: "https://warm-reef-17230.herokuapp.com/api/v1"
});

export default instance;

// const getSurveys = async () => {
//   axios
//   .get(/getCreatedSurveys")
//   .then((json) => {
//     console.log("returned surveys:", json.data);
//     return json.data
//   });
// }

const createSurvey = (jsonSurveyData) => {
  jSD = jsonSurveyData.valuesHash;
  const surveyJSON = {
    date: Date.now(),
    name: jSD["Name"],
    language: jSD["Language"],
    story: jSD["Story"],
    sentenceSelection: jSD["How should sentences be selected"],
    numberSentences: jSD["How many sentences in survey"]
  };
  console.log("surveyJSON", surveyJSON);
  axios
    .post(
      "https://warm-reef-17230.herokuapp.com/api/v1/createSurvey",
      surveyJSON
    )
    .then((json) => {
      console.log("new survey created");
    });
};

export { createSurvey };
