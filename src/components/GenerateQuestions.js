import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/GenerateQuestions.scss";
// Configs
import axios from "./configs/axios";
// Components
import Questions from "./Questions";

function GenerateQuestions() {
  const { state } = useLocation();
  const [questions, setQuestions] = useState([]);

  const queriesGenerator = () => {
    const configs = Object.keys(state)
      .map((key) => `${key}=${state[key]}`)
      .join("&");
    return configs;
  };

  useEffect(() => {
    const queries = queriesGenerator();
    axios
      .get(`?+${queries}`)
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return questions.length > 0 ? (
    <Questions questions={questions} />
  ) : (
    <div className="generateQuestions">
      <span>Loading...</span>
    </div>
  );
}

export default GenerateQuestions;
