import Button from '@/shared/ui/button/Button';
import styles from './TopBar.module.scss';

export default function CreateModelTopBar() {
  return (
    <div className={styles.mainTopBar}>
      <Button isSubmit={false}>Отмена</Button>
      <Button isSubmit>Сохранить</Button>
    </div>
  );
}
