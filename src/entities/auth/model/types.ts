export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  email: string;
}

export interface IAuthFormValues {
  email: string;
  password: string;
}