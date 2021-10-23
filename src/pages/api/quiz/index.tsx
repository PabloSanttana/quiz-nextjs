import type { NextApiRequest, NextApiResponse } from "next";

import answers from "../bancoDeQuestoes";
import { random } from "../../../functions/array";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ids = random(answers.map((answer) => answer.id));
  return res.status(200).json(ids);
}
