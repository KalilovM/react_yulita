import styles from "./Section.module.scss";

type ISectionProps = {
  icon: string;
  title: string;
  href: string;
};

export default function Section(props: ISectionProps) {
  return (
    <a href={props.href} className={styles.section}>
      <div className={styles.sectionIcon}>
        <img src={props.icon} />
      </div>
      <h4>{props.title}</h4>
    </a>
  );
}
