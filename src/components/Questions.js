import { useState } from "react";
import "../style/Questions.scss";
// Components
import Question from "./Question";

function Questions({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [endGame, setEndGame] = useState(false);

  // Generate single question and questions' answers
  const question = questions[questionIndex];
  const correct_answer = questions[questionIndex].correct_answer;
  const incorrect_answers = questions[questionIndex].incorrect_answers;
  const answers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  const nextQuestion = () => {
    const index = questionIndex + 1;

    if (index >= questions.length) {
      setEndGame(true);
    } else if (questionIndex < questions.length) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="questions">
      <Question
        question={question}
        questionIndex={questionIndex}
        answers={answers}
        correct_answer={correct_answer}
        nextQuestion={nextQuestion}
        numberOfQuestions={questions.length}
        endGame={endGame}
      />
    </div>
  );
}

export default Questions;
