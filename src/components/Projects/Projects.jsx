import { WIKIZNAK_PROJECT, ALPHA_PROFIT, PUKISWAP } from "../../links";
import Line from "../ui/Line";
import ProjectsCard from "../ui/ProjectsCard";
import styles from "./Projects.module.sass";

export default function Projects() {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>Проекты</h2>
      <div className={styles.blockCards}>
        <ProjectsCard
          title="Dashboard Alpha Profit"
          text="Разработка дашборда для управления торговой инфраструктурой. Подготовка к выкладыванию на сервер. Поддержка проекта."
          imgs={["/react.svg", "/ts.svg", "/html5.svg", "/css3.svg"]}
          link={true}
          link_address={ALPHA_PROFIT}
          link_text="LinkedIn фонда"
        />
        {/* <ProjectsCard
          title="Pukiswap exchange"
          text="Самостоятельный проект для демонстрации навыков разработки DEX-приложения. UI для обмена токенов, подключение кошелька, взаимодействие со смарт-контрактами Uniswap."
          imgs={["/next.svg", "/react.svg", "/ts.svg", "/ethers.svg"]}
          link={true}
          link_address={PUKISWAP}
          link_text="сайт"
        /> */}
        <ProjectsCard
          title="Админ панель"
          text="Разработка админ панели для мобильного приложения зарядных станций самокатов. В панели отображаются таблицы с возможностью удаления, добавления, изменения, отслеживания новых станций/пользователей/администраторов."
          imgs={["/next.svg", "/ts.svg", "/html5.svg", "/css3.svg"]}
          link={false}
        />
        <ProjectsCard
          title="Wikiznak + CMS"
          text="Многостраничный сайт для юридической компании c подключением cms для управления контентом на сайте. Отправка заявок с формы в amoCRM."
          imgs={["/next.svg", "/ts.svg", "/html5.svg", "/sass.svg"]}
          link={true}
          link_address={WIKIZNAK_PROJECT}
          link_text="сайт"
        />
        <ProjectsCard
          title="Этот вебсайт :)"
          text="Небольшой одностраничный сайт. Дизайн и разработка."
          imgs={["/react.svg", "/js.svg", "/html5.svg", "/sass.svg"]}
          link={false}
        />
      </div>
      <Line />
    </div>
  );
}
