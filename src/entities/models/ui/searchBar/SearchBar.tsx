import SearchIcon from '@/assets/img/search.png';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <img src={SearchIcon} />
      <input className={styles.searchInput} placeholder="Поиск по моделям" />
    </div>
  );
}
