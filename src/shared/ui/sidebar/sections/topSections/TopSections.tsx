import Section from '../section/Section';
import ModelsIcon from '@/assets/img/models.png';
import WarehouseIcon from '@/assets/img/warehouse.png';
import ResearchIcon from '@/assets/img/research.png';
import styles from './TopSections.module.scss';

export default function TopSections() {
  return (
    <div className={styles.topSections}>
      <Section href="/" icon={ModelsIcon} title="Модели" />
      <Section href="#section" icon={WarehouseIcon} title="Склад" />
      <Section href="#section" icon="#" title="Продажа" />
      <Section href="#section" icon="#" title="Управление" />
      <Section href="#section" icon={ResearchIcon} title="Аналитика" />
    </div>
  );
}
