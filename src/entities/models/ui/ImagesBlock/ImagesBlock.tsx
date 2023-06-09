import ImageUploadIcon from '@/assets/img/imageUpload.svg';
import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { IModelCreate, IModelImage } from '../../model/types';
import styles from './ImagesBlock.module.scss';
import Image from '../image/Image';

type IProps = {
  name: Path<IModelCreate>;
  heading: string;
  imageFiles?: IModelImage[];
  register: UseFormRegister<IModelCreate>;
  readonly?: boolean;
};

export default function ImagesBlock(props: IProps) {
  const { register, name, heading, imageFiles, readonly } = props;
  const [images, setImages] = React.useState<Array<object>>([]);
  const [urls, setUrls] = React.useState<string[]>([]);
  const [arrayNum, setArrayNum] = React.useState<number>(8);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesList = Array.from(files);
      const newUrls = filesList.map((file) => URL.createObjectURL(file));
      setUrls(newUrls.concat(urls));
      setImages([...filesList, ...images]);
    }
    console.log(files);
  };

  React.useEffect(() => {
    if (imageFiles) {
      setUrls(imageFiles.map((image) => image.image));
    }
  }, [imageFiles]);

  return (
    <div className={styles.imagesBlock}>
      <h3>{heading}</h3>
      <div className={styles.imagesList}>
        {!readonly ? (
          <div className={styles.imageUploadBlock}>
            <img src={ImageUploadIcon} alt="" />
            <label htmlFor="imageInput">Добавить фото</label>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              multiple
              className={styles.imageUploadInput}
              readOnly={readonly}
              {...register(name)}
              onChange={onChange}
            />
          </div>
        ) : null}
        {Array(arrayNum)
          .fill(null)
          .map((_, index) => (
            <Image key={index} id={`${index}`} src={urls[index]} alt="" />
          ))}
      </div>
    </div>
  );
}
