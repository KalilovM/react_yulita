import { Link } from "react-router-dom";
import styles from "./LinkAnchor.module.scss";

interface IButtonProps {
  name: string;
  link: string;
}

export default function LinkAnchor(props: IButtonProps) {
  const { name, link } = props;
  return (
    <Link className={styles.buttonLink} to={link}>
      {name}
    </Link>
  );
}
