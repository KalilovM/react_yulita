import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../entities/auth/api/authService";

interface AuthState {
  email: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  email: "",
  isAuth: false,
};

const accessToken = localStorage.getItem("access");
const refreshToken = localStorage.getItem("refresh");
if (accessToken || refreshToken) {
  initialState.isAuth = true;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.isAuth = true;
    },
  },
});

export const { setAuth } = authSlice.actions;


// async thunk use
export const login = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    const response = await AuthService.login(email, password);
    console.log(response);
    localStorage.setItem("access", response.data.access_token);
    localStorage.setItem("refresh", response.data.refresh_token);
    dispatch(setAuth(email));
  } catch (error) {
    console.log(error);
  }
};

export default authSlice.reducer;
