import SearchBar from '../searchBar/SearchBar';
import styles from './TopBar.module.scss';
import LinkAnchor from '../../../../shared/ui/linkAnchor/LinkAnchor';

export default function TopBar() {
  return (
    <div className={styles.mainTopBar}>
      <SearchBar />
      <LinkAnchor name="Добавить модель" link="/create" />
      <LinkAnchor name="Фильтровать" link="#" />
      <LinkAnchor name="Сортировать" link="#" />
    </div>
  );
}
