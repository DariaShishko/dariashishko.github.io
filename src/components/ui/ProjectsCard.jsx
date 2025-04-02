import { useEffect } from "react";
import styles from "./ProjectsCard.module.sass";
import { Link } from "react-router-dom";

export default function ProjectsCard({
  title,
  text,
  imgs,
  link,
  link_address,
  link_text,
}) {
  return (
    <div className={styles.block}>
      <div className={styles.blockHeader}>
        <h3 className={styles.blockTitle}>{title}</h3>
        <p className={styles.blockText}>{text}</p>
      </div>
      <div className={styles.blockFooter}>
        {link && (
          <Link to={link_address} target="_blank" className={styles.blockLink}>
            {link_text} {">>"}
          </Link>
        )}
        <div className={styles.blockImgs}>
          {imgs &&
            imgs.map((i, ind) => {
              return (
                <img
                  alt="icon"
                  src={`${i}`}
                  className={styles.blockImgsImg}
                  key={ind}
                ></img>
              );
            })}
        </div>
      </div>
    </div>
  );
}
