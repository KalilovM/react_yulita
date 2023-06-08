import styles from './Image.module.scss';
import NoImageIcon from '@/assets/img/noImage.svg';

interface IProps {
  src?: string;
  alt?: string;
  id: string;
}

export default function Image(props: IProps) {
  const { src, alt, id } = props;
  return (
    <div className={styles.imageContainer}>
      {src ? (
        <img src={src} alt={alt} id={id} className={styles.fullfillImage} />
      ) : (
        <img src={NoImageIcon} alt={alt} id={id} />
      )}
      {src ? null : <label htmlFor={id}>Фото отсутсвует</label>}
    </div>
  );
}
