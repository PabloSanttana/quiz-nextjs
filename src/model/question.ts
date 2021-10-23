import answerModel from "./answer";
import { random } from "../functions/array";

export default class questionModel {
  #id: number;
  #utterance: string;
  #answers: answerModel[];
  #toHit: boolean;

  constructor(
    id: number,
    utterance: string,
    answers: answerModel[],
    toHit = false
  ) {
    this.#id = id;
    this.#utterance = utterance;
    this.#answers = answers;
    this.#toHit = toHit;
  }

  get id() {
    return this.#id;
  }
  get utterance() {
    return this.#utterance;
  }
  get answers() {
    return this.#answers;
  }
  get toHit() {
    return this.#toHit;
  }

  get HandleAnswer() {
    for (let answer of this.answers) {
      if (answer.revealed) return false;
    }
    return false;
  }

  // embaralhar as repostas
  randomAnswers(): questionModel {
    let randomAnswer = random(this.#answers);
    return new questionModel(
      this.#id,
      this.#utterance,
      randomAnswer,
      this.#toHit
    );
  }

  toObject() {
    return {
      id: this.#id,
      utterance: this.#utterance,
      answers: this.#answers.map((answer) => answer.toObject()),
      toHit: this.#toHit,
    };
  }
}
