import React from 'react';
import { useParams } from 'react-router-dom';
import TitleBar from '@/shared/ui/titleBar/TitleBar';
import CreateModelTopBar from '../topBar/CreateModelTopBar';
import { useForm } from 'react-hook-form';
import { IModelCreate, IModelImage } from '../../model/types';
import Input from '../input/Input';
import { useNavigate } from 'react-router-dom';

import styles from './ContentModelCreate.module.scss';
import { Select } from '../select/Select';
import ImagesBlock from '../ImagesBlock/ImagesBlock';
import api from '@/shared/api/api';

export default function ContentModelEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photosessionImages, setPhotosessionImages] = React.useState<Array<IModelImage>>([]);
  const [sampleImages, setSampleImages] = React.useState<Array<IModelImage>>([]);
  const [name, setName] = React.useState<string>('');
  const onSubmit = (data: IModelCreate) => {
    const { photosession_images, sample_images, ...modelData } = data;
    console.log(photosession_images);
    console.log(sample_images);
    try {
      api.patch(`/clothes/${id}/`, modelData).then((res) => {
        const clothId = res.data.id;
        for (const image of photosession_images) {
          const formData = new FormData();
          formData.append('image', image);
          formData.append('cloth', clothId);
          api.post('/clothes/create/model_image/', formData);
        }
        for (const image of sample_images) {
          const formData = new FormData();
          formData.append('image', image);
          formData.append('cloth', clothId);
          api.post('/clothes/create/sample_image/', formData);
        }
        navigate('/');
      });
    } catch (error) {
      console.log(error);
    }
  };
  const { register, handleSubmit, setValue } = useForm<IModelCreate>();

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
      <TitleBar name={`Edit ${name}`} />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.contentLeft}>
          <div className={styles.contentLeftGrid}>
            <Input
              inputType="text"
              labelHeading="Название модели"
              placeholder="Введите название модели"
              register={register}
              name="name"
            />
            <Input
              inputType="text"
              labelHeading="Артикул"
              placeholder="Введите артикул"
              register={register}
              name="article"
            />
            <Select
              name="cloth_type"
              labelHeading="Тип модели"
              labelFor="modelType"
              url="/clothes/types/"
              register={register}
            />
            <Select
              name="suit"
              register={register}
              labelHeading="Костюм"
              labelFor="suit"
              url="/clothes/suits/"
            />
          </div>
          <Input
            inputType="text"
            labelHeading="Размеры"
            placeholder="Введите размеры"
            register={register}
            name="size"
          />
          <Input
            inputType="text"
            labelHeading="Ширина ткани"
            placeholder="Введите ширину ткани"
            register={register}
            name="fabric_width"
          />
          <Input
            inputType="text"
            labelHeading="Ткань"
            placeholder="Введите ткань"
            register={register}
            name="textile"
          />
          <Input
            inputType="text"
            labelHeading="Расход дублерина"
            placeholder="Введите расход дублерина"
            register={register}
            name="dublerin_usage"
          />
          <Input
            inputType="text"
            labelHeading="Расход флазелина"
            placeholder="Введите расход флазелина"
            register={register}
            name="flazelin_usage"
          />
          <Input
            inputType="text"
            labelHeading="Расход ткани фактический"
            placeholder="Введите расход ткани фактический"
            register={register}
            name="actual_fabric_usage"
          />
          <Input
            inputType="text"
            labelHeading="Подклад"
            placeholder="Введите подклад"
            register={register}
            name="lining"
          />
          <Input
            inputType="text"
            labelHeading="Закрутка"
            placeholder="Введите закрутку"
            register={register}
            name="twist"
          />
          <Input
            inputType="text"
            labelHeading="Тех описание"
            placeholder="Введите тех описание"
            register={register}
            name="technical_description"
          />
          <Input
            inputType="text"
            labelHeading="Последовательность обработки"
            placeholder="Введите последовательность обработки"
            register={register}
            name="processing"
          />
          <Input
            inputType="text"
            labelHeading="Фурнитура"
            placeholder="Введите фурнитуру"
            register={register}
            name="furniture"
          />
          <CreateModelTopBar />
        </div>
        <div className={styles.contentRight}>
          <ImagesBlock
            imageFiles={sampleImages}
            heading="Фотографии образца"
            register={register}
            name="sample_images"
          />
          <ImagesBlock
            imageFiles={photosessionImages}
            heading="Фотографии фотосессии"
            register={register}
            name="photosession_images"
          />
        </div>
      </form>
    </div>
  );
}
