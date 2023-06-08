import { ProtectedRoute } from '../shared/ui/protectedRoute/ProtectedRoute';
import Auth from './auth/Auth';
import CreateModel from './models/CreateModel';
import DetailModel from './models/DetailModel';
import Models from './models/Models';
import { Route, Routes } from 'react-router-dom';

export const Router = () => (
  <Routes>
    <Route path="/auth" element={<Auth />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Models />} />
      <Route path="/models/:id" element={<DetailModel />} />
      <Route path="/create" element={<CreateModel />} />
    </Route>
  </Routes>
);
