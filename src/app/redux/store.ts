import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    data: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
