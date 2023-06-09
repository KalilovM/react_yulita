import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import api from '@/shared/api/api';
import { IModelTypesList } from '../../model/types';
import { IModelCreate } from '../../model/types';
import styles from './Select.module.scss';

interface IProps {
  url: string;
  labelFor: string;
  labelHeading: string;
  register: UseFormRegister<IModelCreate>;
  name: Path<IModelCreate>;
}

export const Select = (props: IProps) => {
  const { url, labelHeading, labelFor, register, name } = props;

  const [content, setContent] = React.useState<IModelTypesList[]>([]);
  React.useEffect(() => {
    api.get(url).then((res) => {
      setContent(res.data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <label htmlFor={labelFor}>{labelHeading}</label>
      <select id={labelFor} {...register(name)}>
        {/* set default option */}
        {content.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
