import type { NextApiRequest, NextApiResponse } from "next";

import answers from "../bancoDeQuestoes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = +req.query.id;

  const answer = answers.filter((answer) => answer.id === id);

  console.log(answer);
  if (answer.length === 0) {
    return res.status(204).send("");
  }

  const selectedAnswer = answer[0].randomAnswers();

  return res.status(200).json(selectedAnswer.toObject());
}
