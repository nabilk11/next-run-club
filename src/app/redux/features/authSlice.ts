import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  user: any;
  isLoading: boolean;
};

const initialState = {
  user: null,
  isLoading: true,
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;

export default authSlice.reducer;
