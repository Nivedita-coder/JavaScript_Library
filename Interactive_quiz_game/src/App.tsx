import React, { useState } from "react";
import { fetchQuestions, Difficulty, QuestionState } from "./api/API";
import Question from "./components/Question";

const TOTAL_QUESTION = 15;

export interface UserAnswer {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [quesNumber, setQuesNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuestions(
        TOTAL_QUESTION,
        Difficulty.EASY
      );
      setQuestions(newQuestions);
    } catch (error) {
      console.log(error);
    }

    setScore(0);
    setUserAnswer([]);
    setQuesNumber(0);
    setLoading(false);
  };

  const checkAnswer = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = evt.currentTarget.value;
      const correctAns = questions[quesNumber].correct_answer === answer;
      if (correctAns) {
        setScore((previous_score) => previous_score + 1);
      }

      const userAns = {
        question: questions[quesNumber].question,
        answer: answer,
        isCorrect: correctAns,
        correctAnswer: questions[quesNumber].correct_answer,
      };

      setUserAnswer((previous) => [...previous, userAns]);
      setIsClicked(true);
    }
  };

  const nextQuestion = () => {
    setIsClicked(false);
    const nextQuestionNumber = quesNumber + 1;
    if (nextQuestionNumber === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setQuesNumber(nextQuestionNumber);
    }
  };
  return (
    <div className="bg-gray-100 w-10/12 md:w-2/4 h-full p-4 my-4 m-auto shadow-sm rounded-sm">
      <header>
        <h1 className="font-bold text-2xl text-center uppercase text-gray-800">
          Pop Quiz
        </h1>
        {gameOver || userAnswer.length === TOTAL_QUESTION ? (
          <button
            onClick={startQuiz}
            className="btn bg-purple-600 text-purple-100 border-purple-200  focus:shadow-outline  hover:bg-purple-400 hover:text-purple-700 transform hover:translate-y-1"
          >
            Start Quiz
          </button>
        ) : null}
        {!gameOver ? (
          <p className="bg-blue-100 p-4 my-4 text-blue-700 font-bold tracking-widest rounded-lg">
            Score: {score}
          </p>
        ) : null}
      </header>
      <main>
        {loading ? (
          <p className="tracking-widest animate-pulse text-gray-700">
            Loading question...
          </p>
        ) : null}
        {!loading && !gameOver ? (
          <Question
            questionNumber={quesNumber + 1}
            totalQuestions={TOTAL_QUESTION}
            question={questions[quesNumber].question}
            answers={questions[quesNumber].answers}
            userAnswer={userAnswer[quesNumber]}
            correctAnswer={questions[quesNumber].correct_answer}
            giveAnswer={isClicked}
            handleCheckAnswer={checkAnswer}
          />
        ) : null}
        {!gameOver &&
        !loading &&
        userAnswer.length === quesNumber + 1 &&
        quesNumber !== TOTAL_QUESTION - 1 ? (
          <button
            className="btn bg-indigo-700 text-indigo-100 border-indigo-200 focus:shadow-outline  hover:bg-indigo-400 hover:text-indigo-700 transform hover:translate-y-1"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        ) : null}
      </main>
    </div>
  );
};

export default App;
