import axios from "axios";
import AuthService from "../../entities/auth/api/authService";

export const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_API as string,
})

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API as string,
})


api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refresh');
      if (refreshToken) {
        try {
          const response = await axiosInstance.post('/users/token/refresh/', {
            refresh: refreshToken,
          });
          const newAccessToken = response.data.access;
          localStorage.setItem('access', newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return api(originalRequest);
        } catch (refreshError) {
          AuthService.logout();
          window.location.href = "/auth"
          return Promise.reject(refreshError);
        }
      } else {
        AuthService.logout();
        window.location.href = "/auth"
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
