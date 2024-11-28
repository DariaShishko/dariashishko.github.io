import { Link } from "react-router-dom";
import styles from "./ContactBlock.module.sass";

export default function ContactBlock({ img, contact_link, text }) {
  return (
    <div className={styles.block}>
      <Link to={contact_link} target="_blank" className={styles.blockLink}>
        <div
          className={styles.blockLinkImg}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {text}
      </Link>
    </div>
  );
}
