import Line from "../ui/Line";
import ContactBlock from "../ui/ContactBlock";
import styles from "./StartScreen.module.sass";
import GreenBage from "../ui/GreenBage";
import { DESCRIPTION, EMAIL, TELEGRAM } from "../../links";

export default function StartScreen() {
  return (
    <div className={styles.block}>
      <GreenBage />
      <h1 className={styles.blockTitle}>
        Frontend <br /> Developer
      </h1>
      <div className={styles.blockContacts}>
        <ContactBlock
          contact_link={EMAIL}
          text="E-mail"
          img="/email_icon.svg"
        />
        <ContactBlock
          contact_link={TELEGRAM}
          text="Telegram"
          img="/telegram_icon.svg"
        />
      </div>
      <p className={styles.blockText}>{DESCRIPTION}</p>
      <Line />
    </div>
  );
}
