import styles from './Button.module.scss';

interface IButtonProps {
  isSubmit: boolean;
  children: React.ReactNode;
}

export default function Button(props: IButtonProps) {
  const { children, isSubmit } = props;
  return (
    <button className={styles.buttonLink} type={isSubmit ? 'submit' : 'button'}>
      {children}
    </button>
  );
}
