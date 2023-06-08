import TopSections from "./topSections/TopSections";
import BottomSections from "./bottomSections/BottomSections";
import styles from "./Sections.module.scss";

export default function Sections() {
  return (
    <div className={styles.sections}>
      <TopSections />
      <BottomSections />
    </div>
  );
}
