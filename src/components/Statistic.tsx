import styles from "../styles/components/Estatistica.module.css";

interface EstatisticaProps {
  value: any;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

export default function Statistic(props: EstatisticaProps) {
  return (
    <div className={styles.estatistica}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.backgroundColor ?? "#FDD60F",
          color: props.fontColor ?? "#333",
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
