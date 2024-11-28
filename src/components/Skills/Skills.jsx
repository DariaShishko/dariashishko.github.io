import styles from "./Skills.module.sass";
import Line from "../ui/Line";
import SkillsCard from "../ui/SkillsCard";

export default function Skills() {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>Навыки</h2>
      <div className={styles.blockCards}>
        <SkillsCard img="/react.svg" text="React" />
        {/* <SkillsCard img="/redux.svg" text="Redux Toolkit" /> */}
        <SkillsCard img="/next.svg" text="Next" />
        <SkillsCard img="/html5.svg" text="HTML5" />
        <SkillsCard img="/css3.svg" text="CSS3" />
        <SkillsCard img="/sass.svg" text="SCCS" />
        <SkillsCard img="/js.svg" text="JavaScript" />
        <SkillsCard img="/ts.svg" text="TypeScript" />
      </div>
      <div className={styles.blockAdditional}>
        <h3 className={styles.blockAdditionalTitle}>Дополнительно:</h3>
        <p className={styles.blockAdditionalText}>
          REST API, JWT авторизация, Figma, базовые принципы UX/UI
        </p>
      </div>
      <Line />
    </div>
  );
}
