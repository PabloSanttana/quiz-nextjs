import styles from "../styles/pages/Resultado.module.css";
import Statistic from "../components/Statistic";
import Button from "../components/Button";
import { useRouter } from "next/router";

export default function Resultado() {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.container}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Statistic text="Perguntas" value={total} />
        <Statistic text="Certas" value={certas} backgroundColor="#9CD2A4" />
        <Statistic
          text="Percentual"
          value={`${percentual}%`}
          fontColor="#DE6A33"
        />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  );
}
