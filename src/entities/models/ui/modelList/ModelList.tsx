import Model from '../model/Model';
import styles from './ModelList.module.scss';
import api from '@/shared/api/api';
import React from 'react';

interface Model {
  id: number;
  name: string;
  article: string;
  suit: string;
  preview_image: string;
}

export default function ModelList() {
  //TODO: react query use here
  const [models, setModels] = React.useState([]);

  React.useEffect(() => {
    api.get('/clothes').then((response) => {
      setModels(response.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {models.map((model: Model) => (
        <Model
          key={model.id}
          name={model.name}
          article={model.article}
          suit={model.suit}
          img={model.preview_image}
          link={`/models/${model.id}`}
        />
      ))}
    </div>
  );
}
