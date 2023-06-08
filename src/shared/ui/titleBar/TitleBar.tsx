import SettingsButton from '../settingsButton/SettingsButton';
import styles from './TitleBar.module.scss';

interface IProps {
  name: string;
}

export default function TitleBar(props: IProps) {
  const { name } = props;
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <SettingsButton />
    </div>
  );
}
