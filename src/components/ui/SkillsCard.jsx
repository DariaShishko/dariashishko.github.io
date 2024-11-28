import styles from "./SkillsCard.module.sass";

export default function SkillsCard({ img, text }) {
  return (
    <div className={styles.block}>
      <div
        className={styles.blockImg}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <span className={styles.blockText}>{text}</span>
    </div>
  );
}
