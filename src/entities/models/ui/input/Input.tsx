import type { ReactElement } from 'react';
import styles from './Input.module.scss';

import { UseFormRegister, Path } from 'react-hook-form';
import { IModelCreate } from '../../model/types';

interface IProps {
  name: Path<IModelCreate>;
  inputType: string;
  labelHeading: string;
  placeholder: string;
  register: UseFormRegister<IModelCreate>;
  required?: boolean;
  readonly?: boolean;
}

export default function Input(props: IProps): ReactElement {
  const { inputType, labelHeading, placeholder, register, required, name, readonly } = props;
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{labelHeading}</label>
      <input
        type={inputType}
        id={name}
        placeholder={placeholder}
        {...register(name, { required })}
        readOnly={readonly}
      />
    </div>
  );
}
