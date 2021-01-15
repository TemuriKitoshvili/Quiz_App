import { useState } from "react";
import "../style/Question.scss";
// Components
import EndQuiz from "./EndQuiz";
// Material UI
import { Button } from "@material-ui/core";

function Question({
  question,
  questionIndex,
  answers,
  correct_answer,
  nextQuestion,
  numberOfQuestions,
  endGame,
}) {
  const [showAnswer, setshowAnswer] = useState(false);
  const [NextButton, setNextButton] = useState(false);
  const [score, setScore] = useState(0);

  // Check answer is correct or not and if it's correct increase score. Turns on the next button.
  const handleAnswer = (answer) => {
    setshowAnswer(true);
    setNextButton(true);

    if (!showAnswer) {
      if (answer === correct_answer) {
        setScore(score + 1);
      }
    }
  };

  // Turns off the next button, Generates next question.
  const GenerateNextQuestion = () => {
    setNextButton(false);
    setshowAnswer(false);
    nextQuestion();
  };

  return endGame ? (
    <EndQuiz score={score} numberOfQuestions={numberOfQuestions} />
  ) : (
    <div className="question">
      <h4>
        Question {questionIndex + 1}/{numberOfQuestions}
      </h4>
      <div className="question__container">
        <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
      </div>
      <div className="question__options">
        {answers.map((answer) => {
          const buttonColor = showAnswer
            ? answer === correct_answer
              ? "primary"
              : "secondary"
            : "default";

          return (
            <Button
              key={answer}
              color={buttonColor}
              variant="outlined"
              className={buttonColor}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </Button>
          );
        })}
      </div>

      <div className="question__nextButton">
        {NextButton && (
          <Button
            color="primary"
            variant="contained"
            onClick={GenerateNextQuestion}
          >
            next question
          </Button>
        )}
      </div>
    </div>
  );
}

export default Question;
