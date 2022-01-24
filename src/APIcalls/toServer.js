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
    numberSentences: jSD["How many sentences in survey"],
    sentenceList: []
  };

  const createSentenceList = () => {
    if (surveyJSON.sentenceSelection !== "random") {
      surveyJSON.sentenceList = [
        ...Array(parseInt(surveyJSON.numberSentences)).keys()
      ];
    } else {
      let totalSentences = 25;
      var arr = [];
      while (arr.length < parseInt(surveyJSON.numberSentences)) {
        var r = Math.floor(Math.random() * totalSentences) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      surveyJSON.sentenceList = arr;
    }
  };
  createSentenceList();
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
