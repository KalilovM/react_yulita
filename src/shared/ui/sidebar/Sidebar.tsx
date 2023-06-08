import Sections from "./sections/Sections";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <h1>Лого</h1>
      </div>
      <Sections />
    </div>
  );
}
