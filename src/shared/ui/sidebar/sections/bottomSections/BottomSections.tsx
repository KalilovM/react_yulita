import Section from '../section/Section';
import HelpIcon from '@/assets/img/help.png';
import styles from './BottomSections.module.scss';

export default function BottomSections() {
  return (
    <div className={styles.bottomSections}>
      <Section href="#section" icon={HelpIcon} title="Помощь" />
    </div>
  );
}
