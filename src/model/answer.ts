export default class answerModel {
  #value: string;
  #certain: boolean;
  #revealed: boolean;

  constructor(value: string, certain: boolean, revealed = false) {
    this.#value = value;
    this.#certain = certain;
    this.#revealed = revealed;
  }

  static certain(value: string) {
    return new answerModel(value, true);
  }
  static wrong(value: string) {
    return new answerModel(value, false);
  }

  get value() {
    return this.#value;
  }
  get certain() {
    return this.#certain;
  }
  get revealed() {
    return this.#revealed;
  }

  get HandleAnswer() {
    return false;
  }

  handleRevealed() {
    return new answerModel(this.#value, this.#certain, true);
  }

  static toAnswerModel(obj: answerModel): answerModel {
    return new answerModel(obj.value, obj.certain, obj.revealed);
  }

  toObject() {
    return {
      value: this.#value,
      certain: this.#certain,
      revealed: this.#revealed,
    };
  }
}
