import { useEffect, useState } from "react";
import { getSurveys } from "../APIcalls/toServer";
import { Container, Table } from "react-bootstrap";
// import axios from "axios";
import instance from "../APIcalls/toServer";
import { Outlet, Link } from "react-router-dom";

const QuestionnaireList = () => {
  const [allSurveysJSON, setAllSurveysJSON] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get("getCreatedSurveys");
      setAllSurveysJSON(request.data);
      // console.log("request.data:", typeof request.data);
      // request.data.map((s) => {
      //   console.log("s:", s);
      // });
      return request;
    }
    fetchData();
  }, ["getCreatedSurveys"]);

  // console.log("allSurveysJSON:", allSurveysJSON);

  return (
    <Container>
      <h3>listing surveys</h3>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Story</th>
            <th>Selection</th>
            <th>Questions</th>
            <th>Take Questionnaire</th>
          </tr>
        </thead>
        <tbody>
          {allSurveysJSON.map((s) => (
            <tr key={s.name + "_id"}>
              <td>{s.name}</td>
              <td>{s.language}</td>
              <td>{s.story}</td>
              <td>{s.sentenceSelection}</td>
              <td>{s.numberSentences}</td>
              <td>
                <Link to={{ pathname: `/questionnaire/${s._id}` }}>
                  {" "}
                  <button>start</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default QuestionnaireList;
