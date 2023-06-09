import TitleBar from '@/shared/ui/titleBar/TitleBar';
import CreateModelTopBar from '../topBar/CreateModelTopBar';
import { useForm } from 'react-hook-form';
import { IModelCreate } from '../../model/types';
import Input from '../input/Input';
import { useNavigate } from 'react-router-dom';

import styles from './ContentModelCreate.module.scss';
import { Select } from '../select/Select';
import ImagesBlock from '../ImagesBlock/ImagesBlock';
import api from '@/shared/api/api';

export default function ContentModelCreate() {
  const navigate = useNavigate();
  const onSubmit = (data: IModelCreate) => {
    const { photosession_images, sample_images, ...modelData } = data;
    try {
      api.post('/clothes/create/', modelData).then((res) => {
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
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const { register, handleSubmit } = useForm<IModelCreate>();
  return (
    <div className={styles.container}>
      <TitleBar name="Create Model" />
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
          <ImagesBlock heading="Фотографии образца" register={register} name="sample_images" />
          <ImagesBlock
            heading="Фотографии фотосессии"
            register={register}
            name="photosession_images"
          />
        </div>
      </form>
    </div>
  );
}
