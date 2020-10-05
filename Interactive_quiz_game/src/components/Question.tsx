import React from "react";
import { UserAnswer } from "../App";

export interface Props {
  question: string;
  answers: string[];
  userAnswer: UserAnswer | undefined;
  questionNumber: number;
  totalQuestions: number;
  correctAnswer: string;
  giveAnswer: boolean;
  handleCheckAnswer: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Question: React.FC<Props> = ({
  question,
  answers,
  userAnswer,
  questionNumber,
  totalQuestions,
  correctAnswer,
  giveAnswer,
  handleCheckAnswer,
}) => {
  return (
    <div className="bg-pink-100 tracking-wide p-4">
      <p className="font-bold uppercase mb-3 text-pink-700">
        Questions: {questionNumber} / {totalQuestions}
      </p>
      <p className="mb-3  " dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((ans) => {
          return (
            <div key={ans}>
              <button
                className="shadow-outline py-1 px-4 my-4 rounded-full block w-full"
                disabled={userAnswer ? true : false}
                value={ans}
                onClick={handleCheckAnswer}
              >
                <span dangerouslySetInnerHTML={{ __html: ans }} />
              </button>
            </div>
          );
        })}
      </div>
      {giveAnswer ? (
        <span className="text-pink-700 tracking-wide">
          Correct answer: {correctAnswer}
        </span>
      ) : null}
    </div>
  );
};

export default Question;
