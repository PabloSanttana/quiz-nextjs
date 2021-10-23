import React from "react";
import questionModel from "../model/question";
import styles from "../styles/components/Question.module.css";
import Answer from "./Answer";
import Utterance from "./Utterance";

const letras = [
  { value: "A", color: "#F2c866" },
  { value: "B", color: "#f266ba" },
  { value: "C", color: "#85d4f2" },
  { value: "D", color: "#bce596" },
];

interface AnswerProps {
  value: questionModel;
  onResponse: (index: number) => void;
}

export default function Question(props: AnswerProps) {
  const value = props.value;

  function renderAnswer() {
    return value.answers.map((value, index) => {
      return (
        <Answer
          key={index}
          value={value}
          index={index}
          text={letras[index].value}
          colorBackgroundText={letras[index].color}
          onResponse={props.onResponse}
        />
      );
    });
  }

  return (
    <div className={styles.container}>
      <Utterance text={value.utterance} />
      {renderAnswer()}
    </div>
  );
}
