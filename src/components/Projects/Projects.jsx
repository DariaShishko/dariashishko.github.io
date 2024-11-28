import { WIKIZNAK_PROJECT } from "../../links";
import Line from "../ui/Line";
import ProjectsCard from "../ui/ProjectsCard";
import styles from "./Projects.module.sass";

export default function Projects() {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>Проекты</h2>
      <div className={styles.blockCards}>
        <ProjectsCard
          title="Этот вебсайт :)"
          text="Небольшой одностраничный сайт. Дизайн и разработка."
          imgs={["/react.svg", "/js.svg", "/html5.svg", "/sass.svg"]}
          link={false}
        />
        <ProjectsCard
          title="Wikiznak + CMS"
          text="Многостраничный сайт для юридической компании c подключением cms для управления контентом на сайте. Отправка заявок с формы в amoCRM."
          imgs={["/next.svg", "/ts.svg", "/html5.svg", "/sass.svg"]}
          link={true}
          link_address={WIKIZNAK_PROJECT}
        />
        <ProjectsCard
          title="Админ панель"
          text="Разработка админ панели для мобильного приложения зарядных станций самокатов. В панели отображаются таблицы с возможностью удаления, добавления, изменения, отслеживания новых станций/пользователей/администраторов."
          imgs={["/next.svg", "/ts.svg", "/html5.svg", "/css3.svg"]}
          link={false}
        />
      </div>
      <Line />
    </div>
  );
}
