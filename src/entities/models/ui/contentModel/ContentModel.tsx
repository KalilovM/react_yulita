import ModelList from '../modelList/ModelList';
import TitleBar from '@/shared/ui/titleBar/TitleBar';
import TopBar from '../topBar/TopBar';
import styles from './ContentModel.module.scss';

export default function ContentModel() {
  return (
    <div className={styles.container}>
      <TitleBar name="Модели" />
      <TopBar />
      <ModelList />
    </div>
  );
}
