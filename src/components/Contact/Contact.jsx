import { CONTACT_DESC, TELEGRAM } from "../../links";
import ContactBlock from "../ui/ContactBlock";
import styles from "./Contact.module.sass";

export default function Contact() {
  return (
    <div className={styles.block}>
      <p className={styles.block_desc}>{CONTACT_DESC}</p>
      <ContactBlock
        contact_link={TELEGRAM}
        text="Связаться со мной"
        img="/telegram_icon.svg"
      />
    </div>
  );
}
