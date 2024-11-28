import Line from "../ui/Line";
import TimelineBlock from "../ui/TimelineBlock";
import styles from "./Timeline.module.sass";

export default function Timeline() {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>Timeline</h2>
      <div className={styles.blockLine}></div>
      <div className={styles.blockTime}>
        <TimelineBlock date="apr 2023 - now" color="#7ABA78">
          Фриланс, frontend developer
        </TimelineBlock>
        <TimelineBlock date="aug 2022 - may 2023" color="#FFFFFF">
          Курсы frontend developer
        </TimelineBlock>
        <TimelineBlock date="sep 2018 - jun 2022" color="#FFFFFF">
          Novosibirsk State Technical University (NSTU), <br />
          бакалавр, прикладная информатика в экономике
        </TimelineBlock>
      </div>
      <Line />
    </div>
  );
}
