import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/components/Time.module.css";

interface TimeProps {
  duration: number;
  timefinished: () => void;
}

export default function Time(props: TimeProps) {
  return (
    <div className={styles.container}>
      <CountdownCircleTimer
        size={120}
        duration={props.duration}
        isPlaying
        onComplete={props.timefinished}
        colors={[
          ["#BCE596", 0.33],
          ["#F5b801", 0.33],
          ["#ed827a", 0.33],
        ]}
      >
        {({ remainingTime }) => (
          <div className={styles.text}>{remainingTime}</div>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
