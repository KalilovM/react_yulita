import styles from './Section.module.scss';
import { Link } from 'react-router-dom';

type ISectionProps = {
  icon: string;
  title: string;
  href: string;
};

export default function Section(props: ISectionProps) {
  return (
    <Link to={props.href} className={styles.section}>
      <div className={styles.sectionIcon}>
        <img src={props.icon} />
      </div>
      <h4>{props.title}</h4>
    </Link>
  );
}
