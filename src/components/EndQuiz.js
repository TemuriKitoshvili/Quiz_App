import { Link } from "react-router-dom";
import "../style/EndQuiz.scss";

// Material UI
import { Button } from "@material-ui/core";

function EndQuiz({ score, numberOfQuestions }) {
  return (
    <div className="endQuiz">
      <h2 className="endQuiz__text">
        congratulations your score: {score}/{numberOfQuestions}
      </h2>
      <Link to="/">
        <Button
          className="endquiz__tryAgain"
          variant="contained"
          color="primary"
        >
          try again
        </Button>
      </Link>
    </div>
  );
}

export default EndQuiz;
