import { shuffleArray } from "./../utils/utils";

export type Questions = {
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionState = Questions & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  amountOfQuestion: number,
  difficulty: Difficulty
) => {
  const url = `https://opentdb.com/api.php?amount=${amountOfQuestion}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(url)).json();
  return data.results.map((question: Questions) => {
    return {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    };
  });
};
