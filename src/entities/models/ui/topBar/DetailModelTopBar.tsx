import LinkAnchor from '@/shared/ui/linkAnchor/LinkAnchor';
import styles from './TopBar.module.scss';

interface IProps {
  id?: string;
}

export default function DetailModelTopBar(props: IProps) {
  const { id } = props;
  return (
    <div className={styles.mainTopBar}>
      <LinkAnchor link="/" name="Назад" />
      <LinkAnchor link={`/models/${id}/edit/`} name="Редактировать" />
    </div>
  );
}
