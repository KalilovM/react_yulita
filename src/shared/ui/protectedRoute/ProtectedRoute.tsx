import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const ProtectedRoute = () => {
  // const token = useSelector((state: RootState) => state.auth.isAuth);
  const token = true;
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/auth" state={{ from: location }} replace />;
};
