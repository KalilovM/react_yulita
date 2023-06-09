import React from 'react';
import { useParams } from 'react-router-dom';
import TitleBar from '@/shared/ui/titleBar/TitleBar';
import CreateModelTopBar from '../topBar/CreateModelTopBar';
import { useForm } from 'react-hook-form';
import { IModelCreate, IModelImage } from '../../model/types';
import Input from '../input/Input';
import { useNavigate } from 'react-router-dom';

import styles from './ContentModelCreate.module.scss';
import ImagesBlock from '../ImagesBlock/ImagesBlock';
import api from '@/shared/api/api';
import DetailModelTopBar from '../topBar/DetailModelTopBar';

export default function ContetnModelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photosessionImages, setPhotosessionImages] = React.useState<Array<IModelImage>>([]);
  const [sampleImages, setSampleImages] = React.useState<Array<IModelImage>>([]);
  const [name, setName] = React.useState<string>('');
  const { register, handleSubmit, setValue } = useForm<IModelCreate>();

  const onSubmit = async () => {
    navigate('/');
  };

  React.useEffect(() => {
    try {
      api.get(`/clothes/${id}/`).then((res) => {
        setValue('name', res.data.name);
        setValue('article', res.data.article);
        setValue('cloth_type', res.data.cloth_type);
        setValue('suit', res.data.suit);
        setValue('size', res.data.size);
        setValue('fabric_width', res.data.fabric_width);
        setValue('textile', res.data.textile);
        setValue('dublerin_usage', res.data.dublerin_usage);
        setValue('flazelin_usage', res.data.flazelin_usage);
        setValue('actual_fabric_usage', res.data.actual_fabric_usage);
        setValue('lining', res.data.lining);
        setValue('twist', res.data.twist);
        setValue('technical_description', res.data.technical_description);
        setValue('processing', res.data.processing);
        setValue('furniture', res.data.furniture);
        setPhotosessionImages(res.data.model_images);
        setSampleImages(res.data.sample_images);
        setName(res.data.name);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar name={`Details of ${name}`} />
      <DetailModelTopBar id={id} />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.contentLeft}>
          <div className={styles.contentLeftGrid}>
            <Input
              inputType="text"
              labelHeading="Название модели"
              placeholder="Введите название модели"
              register={register}
              readonly
              name="name"
            />
            <Input
              inputType="text"
              labelHeading="Артикул"
              placeholder="Введите артикул"
              register={register}
              readonly
              name="article"
            />
            <Input
              inputType="text"
              name="cloth_type"
              labelHeading="Тип модели"
              placeholder="Введите тип модели"
              readonly
              register={register}
            />
            <Input
              inputType="text"
              name="suit"
              readonly
              register={register}
              labelHeading="Костюм"
              placeholder="Введите костюм"
            />
          </div>
          <Input
            inputType="text"
            labelHeading="Размеры"
            placeholder="Введите размеры"
            register={register}
            name="size"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Ширина ткани"
            placeholder="Введите ширину ткани"
            register={register}
            name="fabric_width"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Ткань"
            placeholder="Введите ткань"
            register={register}
            name="textile"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Расход дублерина"
            placeholder="Введите расход дублерина"
            register={register}
            name="dublerin_usage"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Расход флазелина"
            placeholder="Введите расход флазелина"
            register={register}
            name="flazelin_usage"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Расход ткани фактический"
            placeholder="Введите расход ткани фактический"
            register={register}
            name="actual_fabric_usage"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Подклад"
            placeholder="Введите подклад"
            register={register}
            name="lining"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Закрутка"
            placeholder="Введите закрутку"
            register={register}
            name="twist"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Тех описание"
            placeholder="Введите тех описание"
            register={register}
            name="technical_description"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Последовательность обработки"
            placeholder="Введите последовательность обработки"
            register={register}
            name="processing"
            readonly
          />
          <Input
            inputType="text"
            labelHeading="Фурнитура"
            placeholder="Введите фурнитуру"
            register={register}
            name="furniture"
            readonly
          />
        </div>
        <div className={styles.contentRight}>
          <ImagesBlock
            imageFiles={sampleImages}
            heading="Фотографии образца"
            register={register}
            readonly
            name="sample_images"
          />
          <ImagesBlock
            imageFiles={photosessionImages}
            heading="Фотографии фотосессии"
            register={register}
            readonly
            name="photosession_images"
          />
        </div>
      </form>
    </div>
  );
}
