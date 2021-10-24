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

  // para verificar se foi respondida
  get HandleAnswer() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true;
    }
    return false;
  }

  handleAnswerQuestion(index: number): questionModel {
    const toHit = this.#answers[index]?.certain;

    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;
      const revealed = selectedAnswer || answer.certain;
      return revealed ? answer.handleRevealed() : answer;
    });

    return new questionModel(this.#id, this.#utterance, answers, toHit);
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
      isAnswer: this.HandleAnswer,
      toHit: this.#toHit,
      answers: this.#answers.map((answer) => answer.toObject()),
    };
  }
}
