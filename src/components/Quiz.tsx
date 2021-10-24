import styles from "../styles/components/Quiz.module.css";
import questionModel from "../model/question";
import Question from "./Question";
import Button from "./Button";

interface QuizProps {
  question: questionModel;
  last: boolean;
  answerQuestion: (question: questionModel) => void;
  next: () => void;
}

export default function Quiz(props: QuizProps) {
  function handleSelectedAnswer(index: number) {
    if (!props.question.HandleAnswer) {
      props.answerQuestion(props.question.handleAnswerQuestion(index));
    }
  }

  return (
    <div className={styles.container}>
      {props.question ? (
        <Question
          duration={5}
          value={props.question}
          onResponse={handleSelectedAnswer}
          timefinished={props.next}
        />
      ) : (
        false
      )}

      <Button
        onClick={props.next}
        text={props.last ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
