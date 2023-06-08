import { UseFormRegister, Path } from 'react-hook-form';
import { IAuthFormValues } from '../../model/types';
import styles from './Input.module.scss';

interface IProps {
  name: Path<IAuthFormValues>;
  type: string;
  placeholder: string;
  register: UseFormRegister<IAuthFormValues>;
  required?: boolean;
}

export default function Input(props: IProps) {
  const { type, placeholder, register, name, required } = props;

  return (
    <input
      className={styles.authInput}
      type={type}
      placeholder={placeholder}
      {...register(name, { required })}
    />
  );
}
