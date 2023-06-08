import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../entities/auth/ui/input/Input';
import Button from '../../shared/ui/button/Button';
import styles from './Auth.module.scss';
import { IAuthFormValues } from '../../entities/auth/model/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/authSlice';

export default function Auth() {
  const { register, handleSubmit } = useForm<IAuthFormValues>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IAuthFormValues> = async (data) => {
    await login(data.email, data.password)(dispatch);
    navigate('/');
  };
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Лого/тайтл</h1>
        <Input name="email" type="email" placeholder="Email" register={register} required={true} />
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          register={register}
          required={true}
        />
        <Button isSubmit={true}>Войти</Button>
      </form>
    </div>
  );
}
