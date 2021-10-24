import answerModel from "../model/answer";
import styles from "../styles/components/Answer.module.css";

interface AnswerProps {
  value: answerModel;
  index: number;
  text: string;
  colorBackgroundText: string;
  onResponse: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const data = props.value;
  const revealed = data.revealed ? styles.revealed : "";

  return (
    <div
      className={styles.container}
      onClick={() => props.onResponse(props.index)}
    >
      <div className={`${styles.content} ${revealed}`}>
        <div className={styles.front}>
          <div
            className={styles.text}
            style={{ backgroundColor: props.colorBackgroundText }}
          >
            {props.text}
          </div>
          <div className={styles.value}>{data.value}</div>
        </div>

        <div className={styles.back}>
          {data.certain ? (
            <div className={styles.certain}>
              <div>A resposta certa é...</div>
              <div className={styles.value}>{data.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>A resposta informada está errada...</div>
              <div className={styles.value}>{data.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
