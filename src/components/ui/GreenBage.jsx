import styles from "./GreenBage.module.sass";

export default function GreenBage() {
  return (
    <div className={styles.block}>
      <div className={styles.blockDot}></div>
      <span className={styles.blockText}>available</span>
    </div>
  );
}
