import styles from "../styles/components/Utterance.module.css";

interface UtteranceProps {
  text: string;
}

export default function Utterance(props: UtteranceProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.text}</div>
    </div>
  );
}
