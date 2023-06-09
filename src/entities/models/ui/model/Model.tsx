import styles from './Model.module.scss';
import { Link } from 'react-router-dom';

interface IModelProps {
  link: string;
  img: string;
  name: string;
  suit: string;
  article: string;
}

export default function Model(props: IModelProps) {
  const { link, img, name, suit, article } = props;
  return (
    <div className={styles.modelCard}>
      <Link to={link} className={styles.modelCardImageWrapper}>
        <img src={img} alt={`${name} model`} className={styles.modelCardImage} />
      </Link>
      <div className={styles.modelCardInfo}>
        <h3 className={styles.modelCardTitle}>{name}</h3>
        <div className={styles.modelCardDetails}>
          <span className={styles.modelCardSuite}>{suit}</span>
          <span className={styles.modelCardArticle}>{article}</span>
        </div>
      </div>
    </div>
  );
}
