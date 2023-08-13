import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppUser = {
  username: string | null;
};

type AuthState = {
  user: AppUser | null;
  isLoading: boolean;
};

const initialState = {
  user: null,
  isLoading: true,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return { user: null, isLoading: false };
    },
    login: (state, action: PayloadAction<AppUser>) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;

export default authSlice.reducer;
