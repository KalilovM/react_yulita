import Button from '@/shared/ui/button/Button';
import styles from './TopBar.module.scss';
import LinkAnchor from '@/shared/ui/linkAnchor/LinkAnchor';

export default function CreateModelTopBar() {
  return (
    <div className={styles.mainTopBar}>
      <LinkAnchor link="/" name="Отмена" />
      <Button isSubmit>Сохранить</Button>
    </div>
  );
}
