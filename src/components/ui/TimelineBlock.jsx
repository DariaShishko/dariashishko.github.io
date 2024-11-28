import styles from "./TimelineBlock.module.sass";

export default function TimelineBlock({ date, children, color }) {
  return (
    <div className={styles.block}>
      <div
        className={styles.blockDot}
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div className={styles.blockPoint}>
        <span className={styles.blockPointDate}>{date}</span>
        <p className={styles.blockPointText}>{children}</p>
      </div>
    </div>
  );
}
